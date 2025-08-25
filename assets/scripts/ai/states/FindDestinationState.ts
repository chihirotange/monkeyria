import { find } from 'cc';
import { State } from '../../statemachine/StateMachine';

export class FindDestinationState extends State {
    found: boolean = false;
    onStateEnter(prevState?: State): void {
        let playerCharacter = find("Canvas/GameWorld/Characters/PlayerCharacter");
        if (playerCharacter) {
            this.found = true;
            this.system.setVariable('target', playerCharacter);
        }
    }
}
