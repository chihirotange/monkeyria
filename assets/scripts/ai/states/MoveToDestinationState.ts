import { Node, Vec2 } from 'cc';
import { CharacterMovement } from '../../CharacterMovement';
import { State } from '../../statemachine/StateMachine';

export class MoveToDestinationState extends State {
    private _target: Node = null;
    private _movementComponent: CharacterMovement = null;
    private _isReachedTarget: boolean = false;

    onStateEnter(prevState?: State): void {
        this._target = this.system.getVariable<Node>('target');
        this._movementComponent = this.system.getComponent(CharacterMovement);
    }
    update(deltaTime: number): void {
        if (this._target && !this._isReachedTarget) {
            this._isReachedTarget = Vec2.squaredDistance(this._target.getWorldPosition(), this.system.node.getWorldPosition()) < 1e-3;

            if (!this._isReachedTarget) {
                let direction3d = this._target.getPosition().subtract(this.system.node.getPosition());
                this._movementComponent.SetMovementDirection(direction3d.toVec2());
            } else {
                this._movementComponent.SetMovementDirection(Vec2.ZERO);
            }
        }
    }
}
