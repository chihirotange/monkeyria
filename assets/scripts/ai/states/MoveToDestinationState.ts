import { Node, Vec2 } from 'cc';
import { CharacterMovement } from '../../CharacterMovement';
import { State } from '../../statemachine/StateMachine';

export class MoveToDestinationState extends State {
    private _target: Node = null;
    private _movementComponent: CharacterMovement = null;
    private _isTargetReached: boolean = false;
    get isTargetReached(): boolean { return this._isTargetReached; }

    onStateEnter(prevState?: State): void {
        this._target = this.system.getVariable<Node>('target');
        this._movementComponent = this.system.getComponent(CharacterMovement);
    }
    update(deltaTime: number): void {
        if (this._target && !this.isTargetReached) {
            this._isTargetReached = Vec2.squaredDistance(this._target.getWorldPosition(), this.system.node.getWorldPosition()) < this._movementComponent.speed * deltaTime;

            if (!this.isTargetReached) {
                let direction3d = this._target.getWorldPosition().subtract(this.system.node.getWorldPosition());
                this._movementComponent.SetMovementDirection(direction3d.toVec2());
            } else {
                this._movementComponent.SetMovementDirection(Vec2.ZERO);
            }
        }
    }
    onStateExit(nextState?: State): void {
        this.system.setVariable('target', null);
        this._movementComponent.SetMovementDirection(Vec2.ZERO);
    }
}
