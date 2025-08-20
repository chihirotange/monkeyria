import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    static Instance: GameManager = null;

    start() {
        if (GameManager.Instance != null)
        {
            this.destroy()
        }
        GameManager.Instance = this;
    }
}


