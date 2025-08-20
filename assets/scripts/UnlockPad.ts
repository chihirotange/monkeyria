import { _decorator, CCFloat, CCInteger, Collider2D, Component, Contact2DType, instantiate, Node, Prefab } from 'cc';
import { InteractableObject } from './InteractableObject';
import { Character } from './Character';
import { SetWithEvents } from './containers/SetWithEvent';
const { ccclass, property, type } = _decorator;

@ccclass('UnlockPad')
export class UnlockPad extends InteractableObject {

    @type(Prefab)
    unlockedPrefab: Prefab = null;

    @type(CCInteger)
    requiredCoin: number = 50;

    @type(CCFloat)
    unlockingDuration: number = 5;

    readonly CHECKING_INTERVAL = 0.1;

    _isUnlocking: boolean = false;
    _remainingUnlockingDuration: number = 5;

    start(): void {
        super.start();
        this._remainingUnlockingDuration = this.unlockingDuration;
    }

    onInteractingCharacterAdded(container: SetWithEvents<Character>, character: Character): void {
        if (this._isUnlocking) {
            return;
        }
        if (this._interactingCharacters.size > 0)
        {
            this.startUnlocking();
        }
    }

    onInteractingCharacterRemoved(container: SetWithEvents<Character>, character: Character): void {
        if (this._interactingCharacters.size == 0) {
            this.cancelUnlocking();
        }
    }

    processUnlocking() {
        this._remainingUnlockingDuration -= this.CHECKING_INTERVAL;
        if (this._remainingUnlockingDuration <= 0)
        {
            this.finishUnlocking();
        }
    }

    startUnlocking() {
        console.log("Start unlocking")
        this._isUnlocking = true;
        this._remainingUnlockingDuration = this.unlockingDuration;
        this.schedule(this.processUnlocking, this.CHECKING_INTERVAL);
    }

    cancelUnlocking() {
        this._isUnlocking = false;
        this.unschedule(this.processUnlocking);
    }

    finishUnlocking() {
        this.cancelUnlocking();
        let prefab = instantiate(this.unlockedPrefab);
        // TODO: we might need a custom position
        prefab.setPosition(this.node.getPosition());
        prefab.parent = this.node.parent;
        this.destroy();
    }
}
