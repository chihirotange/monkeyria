import { Node, RigidBody2D, Vec2 } from 'cc';
import { CharacterMovement } from '../../CharacterMovement';
import { State } from '../../statemachine/StateMachine';
import { InteractableObject } from '../../interactable/InteractableObject';
import { Character } from '../../Character';

export class MoveToDestinationState extends State {
    private _target: Node = null;
    private _movementComponent: CharacterMovement = null;
    private _character: Character = null;
    private _isTargetReached: boolean = false;
    get isTargetReached(): boolean { return this._isTargetReached; }
    private callbackHandle = null;

    onStateEnter(prevState?: State): void {
        this._target = this.system.getVariable<Node>('target');
        this._character = this.system.getComponent(Character);
        this._movementComponent = this.system.getComponent(CharacterMovement);
        this.callbackHandle = this.onCharacterBeginInteracting.bind(this);
        this._character.onBeginInteracting.push(this.callbackHandle);
    }

    update(deltaTime: number): void {
        if (this._target && !this._isTargetReached) {
            let interactable = this._target.getComponent(InteractableObject);
            if (interactable) {
                this._isTargetReached = interactable.interactingCharacter.has(this._character);
            } else {
                this._isTargetReached = Vec2.squaredDistance(this._target.getWorldPosition(), this.system.node.getWorldPosition()) < 100;
            }

            let direction = this._target.getWorldPosition().subtract(this.system.node.getWorldPosition()).toVec2();

            if (this._isTargetReached) {
                this._movementComponent.SetMovementDirection(Vec2.ZERO);
                this.unregisterInteractingCallback();
            } else {
                this._movementComponent.SetMovementDirection(direction);
            }
        }
    }
    onStateExit(nextState?: State): void {
        this.system.setVariable('target', null);
        this._movementComponent.SetMovementDirection(Vec2.ZERO);
        this.unregisterInteractingCallback();
    }

    onCharacterBeginInteracting(character: Character, interactable: InteractableObject) {
        if (interactable == this._target.getComponent(InteractableObject)) {
            this._isTargetReached = true;
            this._movementComponent.SetMovementDirection(Vec2.ZERO);
            this.unregisterInteractingCallback();
        }
    }

    unregisterInteractingCallback() {
        const callbackIndex = this._character.onBeginInteracting.indexOf(this.callbackHandle);
        if (callbackIndex > -1) {
            this._character.onBeginInteracting.splice(callbackIndex, 1);
        }
    }
}
