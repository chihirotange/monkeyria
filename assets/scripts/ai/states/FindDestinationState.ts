import { find, Node } from 'cc';
import { State } from '../../statemachine/StateMachine';
import { GameManager } from '../../GameManager';
import { Character } from '../../Character';
import { Shelf } from '../../Shelf';
import { LOG } from '../../FunctionalLibrary';
import { ItemType } from '../../ItemType';
import { CropTile } from '../../CropTile';

export class FindDestinationState extends State {
    found: boolean = false;
    onStateEnter(prevState?: State): void {
        let gameManager = GameManager.instance;
        let character = this.system.getComponent(Character);
        let characterInventory = character.getInventory();

        // find all building with 'shelf' tag
        let shelfNodes = gameManager.findTaskLocationsByType('shelf');
        let shelves: Shelf[] = shelfNodes
            .map((node) => node.getComponent(Shelf))
            .filter((shelf): shelf is Shelf => !!shelf);
        let crops = gameManager.findTaskLocationsByType('crop')
            .map((node) => node.getComponent(CropTile))
            .filter((crop): crop is CropTile => !!crop);

        // check if carry resource
        let carryingAmount = characterInventory.getTotalResourceAmount();
        // check carry limit, check the the 'shelf' with carrying resource
        if (carryingAmount > 0) {
            // get carrying resource
            let carryingResources = characterInventory.getAllResources();

            // Find the resource with the most amount
            let maxResource = null;
            let maxAmount = 0;
            for (const resource of carryingResources) {
                if (resource.amount > maxAmount) {
                    maxAmount = resource.amount;
                    maxResource = resource;
                }
            }
            let targetShelf = shelves.find((shelf) => {
                return shelf.itemTypeToDeposit === maxResource.itemType;
            });
            if (targetShelf) {
                // check can carry more same type of resource
                let canCarryMore = carryingAmount < character.getInventory().getResourceLimit(); // and shelf still has space
                if (canCarryMore) {
                    // --> find other available crops
                    if (crops.length > 0) {
                        this.setTarget(crops[0].node);
                    } else {
                        this.setTarget(targetShelf.node);
                    }
                } else {
                    // --> go to the shelf with that type
                    this.setTarget(targetShelf.node);
                }
            } else {
                LOG('Expect to not go here');
            }
        }
        else {
            // check if any build lack of resource
            shelves.sort((shelfA, shelfB): number => {
                return shelfB.getAvailableSpace() - shelfA.getAvailableSpace();
            });
            let shelf = shelves[0];
            // find crop with that resource type
            let crop = crops.find((c) => {
                return c.itemType === shelf.itemTypeToDeposit;
            });
            if (crop) {
                this.setTarget(crop.node);
            } else {
                // or go to random crop
                this.setTarget(crop[0]);
            }
        }

        let shelf = this.system.getVariable('target').getComponent(Shelf);
        if (shelf && shelf.getAvailableSpace() <= 0) {
            this.setTarget(gameManager.findTaskLocationsByType('trashbin')[0]);
        }
    }

    setTarget(node: Node) {
        this.found = true;
        this.system.setVariable('target', node);
    }
}
