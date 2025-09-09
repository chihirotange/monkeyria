import { Character } from '../../Character';
import { Customer } from '../../Customer';
import { GameManager } from '../../GameManager';
import { ItemType } from '../../ItemType';
import { Shelf } from '../../Shelf';
import { State } from '../../statemachine/StateMachine';
import { FindDestinationState } from './FindDestinationState';

export class CustomerFindDestinationState extends FindDestinationState {

    onStateEnter(prevState?: State): void {
        let gameManager = GameManager.instance;
        let customer = this.system.getComponent(Customer);
        let itemToGather: ItemType = ItemType.None;
        for (const [itemType, amount] of customer.itemList) {
            if (customer.getInventory().getResourceAmount(itemType) < amount) {
                itemToGather = itemType;
                break;
            }
        }
        if (itemToGather == ItemType.None) {
            let counters = gameManager.findTaskLocationsByType('counter');
            if (counters.length > 0) {
                this.setTarget(counters[0]);
            }
            this.found = true;
            return;
        }
        let shelfNodes = gameManager.findTaskLocationsByType('shelf');
        let shelves: Shelf[] = shelfNodes
            .map((node) => node.getComponent(Shelf))
            .filter((shelf): shelf is Shelf => !!shelf);
        // TODO: just cheating
        if (shelves.length > 0) {
            this.found = true;
            this.setTarget(shelves[0].node);
        }
    }
}