import { Character } from '../../Character';
import { Customer } from '../../Customer';
import { State } from '../../statemachine/StateMachine';
import { FindDestinationState } from './FindDestinationState';

export class CustomerFindDestinationState extends FindDestinationState {
    
    onStateEnter(prevState?: State): void {
        let customer = this.system.getComponent(Customer);
    }
}