import { _decorator, Component, Node, Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimationComponent')
export class AnimationComponent extends Component {
    
    private animation: Animation | null = null;

    start() {
        this.animation = this.getComponent(Animation);
        if (!this.animation) {
            console.error('AnimationComponent: No Animation component found on this node. Please add an Animation component.');
        }
    }

    /**
     * Play animation by clip name
     * @param clipName The name of the animation clip to play
     */
    public playAnimation(caller: any, clipName: string) {
        if (!this.animation) {
            console.error('AnimationComponent: No Animation component available');
            return;
        }
        
        // Try to get the clip from the Animation component
        const state = this.animation.getState(clipName);
        if (!state) {
            console.error(`AnimationComponent: Animation clip '${clipName}' not found in Animation component`);
            return;
        }
        
        // Play the animation
        this.animation.play(clipName);
    }
    
    /**
     * Stop the current playing animation
     */
    public stopAnimation() {
        if (this.animation) {
            this.animation.stop();
        }
    }

    update(deltaTime: number) {
        
    }
}


