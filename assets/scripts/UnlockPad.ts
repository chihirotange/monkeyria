import { _decorator, CCFloat, CCInteger, Collider2D, Component, Contact2DType, instantiate, math, Node, Prefab } from 'cc';
import { InteractableObject } from './InteractableObject';
import { Character } from './Character';
import { SetWithEvents } from './containers/SetWithEvent';
import { GameManager } from './GameManager';
const { ccclass, property, type } = _decorator;

@ccclass('UnlockPad')
export class UnlockPad extends InteractableObject {

    @type(Prefab)
    unlockedPrefab: Prefab = null;

    @type(CCInteger)
    requiredCoin: number = 50;

    @type(CCInteger)
    coinPerChecking: number = 1;

    readonly CHECKING_INTERVAL = 0.1;

    private _isUnlocking: boolean = false;

    private _gainedCoin: number = 0;

    start(): void {
        super.start();
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
        let GM = GameManager.instance;
        let spendingCoinAmount = Math.min(this.coinPerChecking, this.requiredCoin - this._gainedCoin);
        if (GM.money >= spendingCoinAmount)
        {
            GM.spendMoney(spendingCoinAmount);
            this._gainedCoin += spendingCoinAmount;
            if (this._gainedCoin >= this.requiredCoin)
            {
                this.finishUnlocking();
            }
        }
    }

    startUnlocking() {
        this._isUnlocking = true;
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
