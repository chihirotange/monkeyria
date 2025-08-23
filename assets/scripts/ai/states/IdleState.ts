import { State } from '../../statemachine/StateMachine';

export class IdleState extends State {
    update(deltaTime: number): void {
        throw new Error('Method not implemented.');
    }
}
