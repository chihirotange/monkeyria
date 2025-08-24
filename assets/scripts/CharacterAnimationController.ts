import { _decorator, Animation, AnimationClip, AnimationState, Component, Node, Vec3 } from 'cc';
import { CharacterMovement } from './CharacterMovement';
const { ccclass, property } = _decorator;

@ccclass('CharacterAnimationController')
export class CharacterAnimationController extends Component {
    private _animationComp: Animation = null;
    private _movementComponent: CharacterMovement = null;
    private _idleState: AnimationState = null;
    private _runState: AnimationState = null;

    start() {
        this._animationComp = this.getComponent(Animation);
        this._idleState = this._animationComp.getState('player_idle');
        this._runState = this._animationComp.getState('player_run');
        this._movementComponent = this.node.parent.getComponent(CharacterMovement);
    }

    update(deltaTime: number) {
        if (this._movementComponent) {
            let direction = this._movementComponent.direction;
            let magSqr = direction.lengthSqr();
            if (magSqr > 0) {
                this.playState(this._runState);
            }
            else {
                this.playState(this._idleState);
            }
            let currentScale = this.node.getScale();
            let scaleX = Math.abs(currentScale.x);
            if (direction.x < 0) {
                scaleX *= -1;
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


