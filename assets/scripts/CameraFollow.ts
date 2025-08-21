import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraFollow')
export class CameraFollow extends Component {
    @property({ type: Node, tooltip: 'The player node to follow' })
    target: Node = null;

    @property({ tooltip: 'Camera follow smoothness (0 = instant, 1 = no movement)' })
    smoothFactor: number = 0.1;

    private _targetPos: Vec3 = new Vec3();
    private _currentPos: Vec3 = new Vec3();

    start() {
    }

    update(deltaTime: number) {
        if (!this.target) return;
        this.target.getWorldPosition(this._targetPos);
        this.node.getWorldPosition(this._currentPos);
        // Lerp camera position towards target
        Vec3.lerp(this._currentPos, this._currentPos, this._targetPos, 1 - Math.pow(this.smoothFactor, deltaTime * 60));
        this.node.setWorldPosition(this._currentPos);
    }
}
