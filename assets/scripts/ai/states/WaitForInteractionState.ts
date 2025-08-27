import { Vec2 } from 'cc';
import { CharacterMovement } from '../../CharacterMovement';
import { State } from '../../statemachine/StateMachine';

export class WaitForInteractionState extends State {
    private _doneWaiting: boolean = false;
    get doneWaiting(): boolean { return this._doneWaiting; }
    waitingTime: number = 0;
    onStateEnter(prevState?: State): void {
        this.waitingTime = 3;
        let characterMovement = this.system.getComponent(CharacterMovement);
        if (characterMovement) {
            characterMovement.SetMovementDirection(Vec2.ZERO);
        }
    }
    update(deltaTime: number): void {
        if (!this._doneWaiting) {
            this.waitingTime -= deltaTime;
            if (this.waitingTime <= 0) {
                this._doneWaiting = true;
            }
        }
    }
}