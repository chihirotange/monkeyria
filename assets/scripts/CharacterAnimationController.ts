import { _decorator, Animation, AnimationClip, AnimationState, Component, Node, Vec3 } from 'cc';
import { CharacterMovement } from './CharacterMovement';
import { Character } from './Character';
const { ccclass, property } = _decorator;

@ccclass('CharacterAnimationController')
export class CharacterAnimationController extends Component {
    private _animationComp: Animation = null;
    private _movementComponent: CharacterMovement = null;
    private _idleState: AnimationState = null;
    private _walkState: AnimationState = null;
    private _walkCarryState: AnimationState = null;
    private _idleCarryState: AnimationState = null;
    private _character: Character = null;

    start() {
        this._animationComp = this.getComponent(Animation);
        this._idleState = this._animationComp.getState('player_idle');
        this._walkState = this._animationComp.getState('player_walk');
        this._walkCarryState = this._animationComp.getState('player_carry');
        this._idleCarryState = this._animationComp.getState('player_idle_carry');

        this._movementComponent = this.node.parent.getComponent(CharacterMovement);
        this._character = this.node.parent.getComponent(Character);
    }

    update(deltaTime: number) {
        let direction = this._movementComponent.direction;
        let isCarrying = this._character.getInventory().getTotalResourceAmount() > 0;

        let magSqr = direction.lengthSqr();
        if (magSqr > 0) {
            this.playState(isCarrying ? this._walkCarryState : this._walkState);
        }
        else {
            this.playState(isCarrying ? this._idleCarryState : this._idleState);
        }

        // flip
        let currentScale = this.node.getScale();
        let scaleX = currentScale.x;
        scaleX = Math.abs(scaleX);
        scaleX *= direction.x < 0 ? -1 : 1;
        this.node.setScale(new Vec3(scaleX, currentScale.y, currentScale.z));
    }

    playState(state: AnimationState) {
        if (!state.isPlaying) {

            this._animationComp.play(state.clip.name);
        }
    }
}
