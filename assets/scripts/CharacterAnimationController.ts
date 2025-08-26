import { _decorator, Animation, AnimationClip, AnimationState, Component, Node, Vec3 } from 'cc';
import { CharacterMovement } from './CharacterMovement';
const { ccclass, property } = _decorator;

@ccclass('CharacterAnimationController')
export class CharacterAnimationController extends Component {
    private _animationComp: Animation = null;
    private _movementComponent: CharacterMovement = null;
    private _idleState: AnimationState = null;
    private _walkState: AnimationState = null;

    start() {
        this._animationComp = this.getComponent(Animation);
        this._idleState = this._animationComp.getState('player_idle');
        this._walkState = this._animationComp.getState('player_walk');
        this._movementComponent = this.node.parent.getComponent(CharacterMovement);
    }

    update(deltaTime: number) {
        if (this._movementComponent) {
            let direction = this._movementComponent.direction;
            let magSqr = direction.lengthSqr();
            let currentScale = this.node.getScale();
            let scaleX = currentScale.x;
            if (magSqr > 0) {
                this.playState(this._walkState);
                scaleX = Math.abs(scaleX);
                scaleX *= direction.x < 0 ? -1 : 1;
            }
            else {
                this.playState(this._idleState);
            }
            this.node.setScale(new Vec3(scaleX, currentScale.y, currentScale.z));
        }
    }

    playState(state: AnimationState) {
        if (!state.isPlaying) {

            this._animationComp.play(state.clip.name);
        }
    }
}


