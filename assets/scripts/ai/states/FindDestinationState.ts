import { find, Node } from 'cc';
import { State } from '../../statemachine/StateMachine';
import { GameManager } from '../../GameManager';
import { Character } from '../../Character';
import { Shelf } from '../../Shelf';
import { LOG } from '../../FunctionalLibrary';

export class FindDestinationState extends State {
    found: boolean = false;
    onStateEnter(prevState?: State): void {
        let gameManager = GameManager.instance;
        let character = this.system.getComponent(Character);
        let characterInventory = character.getInventory();

        // find all building with 'shelf' tag
        let shelves = gameManager.findTaskLocationsByType('shelf');
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
            let targetShelf = shelves.find((node) => {
                let shelfComp = node.getComponent(Shelf);
                return shelfComp.itemTypeToDeposit === maxResource.itemType;
            });
            if (targetShelf) {
                // check can carry more same type of resource
                let canCarryMore = carryingAmount < character.getInventory().getResourceLimit(); // and shelf still has space
                if (canCarryMore) {
                    // --> find other available crops
                    let crops = gameManager.findTaskLocationsByType('crop');
                    if (crops.length > 0) {
                        this.setTarget(crops[0]);
                    } else {
                        this.setTarget(targetShelf);
                    }
                } else {
                    // --> go to the shelf with that type
                    this.setTarget(targetShelf);
                }
            } else {
                LOG('Expect to not go here');
            }
        }
        else {
            // check if any build lack of resource
            // find crop with that resource type

            // or go to random crop
        }

        // let tag = '';
        // if (character.getInventory().getTotalResourceAmount() > 0) {
        //     // deliver to trash bin
        //     tag = 'shelf';
        // } else {
        //     // go to crop
        //     tag = 'crop';
        // }
        // let targets = GameManager.instance.findTaskLocationsByType(tag);
        // if (targets.length > 0) {
        //     this.setTarget(targets[0]);
        // }
    }

    setTarget(node: Node) {
        this.found = true;
        this.system.setVariable('target', node);
    }
}
