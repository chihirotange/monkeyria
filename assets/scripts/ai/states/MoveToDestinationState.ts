import { Node } from 'cc';
import { CharacterMovement } from '../../CharacterMovement';
import { State } from '../../statemachine/StateMachine';

export class MoveToDestinationState extends State {
    private _target: Node = null;
    private _movementComponent: CharacterMovement = null;

    onStateEnter(prevState?: State): void {
        this._target = this.system.getVariable<Node>('target');
        this._movementComponent = this.system.getComponent(CharacterMovement);
    }
    update(deltaTime: number): void {
        if (this._target) {
            let direction3d = this._target.getPosition().subtract(this.system.node.getPosition());
            this._movementComponent.SetMovementDirection(direction3d.toVec2());
        }
    }
}
