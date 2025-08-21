import { _decorator, Component, Node, Label } from 'cc';
import { GameManager } from "./GameManager"
const { ccclass, property } = _decorator;

@ccclass('HUD')
export class HUD extends Component {
    @property({ type: Label })
    moneyLabel: Label = null;

    onLoad() {
        GameManager.events.on('money-changed', this.onMoneyChanged, this);
        // Set initial value
        if (GameManager.instance) {
            this.moneyLabel.string = GameManager.instance.money.toString();
        }
    }

    onDestroy() {
        GameManager.events.off('money-changed', this.onMoneyChanged, this);
    }

    onMoneyChanged(newMoney: number) {
        this.moneyLabel.string = newMoney.toString();
    }
}


