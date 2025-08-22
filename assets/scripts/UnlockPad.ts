import { _decorator, CCFloat, CCInteger, Collider2D, Component, Contact2DType, instantiate, math, Node, Prefab } from 'cc';
import { Character } from './Character';
import { SetWithEvents } from './containers/SetWithEvent';
import { GameManager } from './GameManager';
import { PeriodInteractableObject } from './interactable/PeriodInteractableObject';
const { ccclass, property, type } = _decorator;

@ccclass('UnlockPad')
export class UnlockPad extends PeriodInteractableObject {

    @type(Prefab)
    unlockedPrefab: Prefab = null;

    @type(CCInteger)
    requiredCoin: number = 50;

    @type(CCInteger)
    coinPerChecking: number = 1;

    private _gainedCoin: number = 0;

    start(): void {
        super.start();
    }

    processInterval(character: Character) {
        if (this._gainedCoin >= this.requiredCoin)
        {
            this.endInteraction(character);
            this.finishUnlocking();
            return;
        }

        let GM = GameManager.instance;
        let spendingCoinAmount = Math.min(this.coinPerChecking, this.requiredCoin - this._gainedCoin);
        if (GM.money >= spendingCoinAmount) {
            GM.spendMoney(spendingCoinAmount);
            this._gainedCoin += spendingCoinAmount;
            if (this._gainedCoin >= this.requiredCoin) {
                this.endInteraction(character);
                this.finishUnlocking();
            }
        }
    }

    finishUnlocking() {
        let prefab = instantiate(this.unlockedPrefab);
        // TODO: we might need a custom position
        prefab.setPosition(this.node.getPosition());
        prefab.parent = this.node.parent;
        this.destroy();
    }
}
