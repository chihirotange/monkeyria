import { find } from 'cc';
import { State } from '../../statemachine/StateMachine';
import { GameManager } from '../../GameManager';
import { Character } from '../../Character';

export class FindDestinationState extends State {
    found: boolean = false;
    onStateEnter(prevState?: State): void {
        // check if the owner is carrying anything
        let character = this.system.getComponent(Character);
        let tag = '';
        if (character.getInventory().getTotalResourceAmount() > 0) {
            // deliver to trash bin
            tag = 'shelf';
        } else {
            // go to crop
            tag = 'crop';
        }
        let targets = GameManager.instance.findTaskLocationsByType(tag);
        if (targets.length > 0) {
            this.found = true;
            this.system.setVariable('target', targets[0]);
        }
    }
}
