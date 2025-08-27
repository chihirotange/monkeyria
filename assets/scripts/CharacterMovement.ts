import { _decorator, CCFloat, Component, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterMovement')
export class CharacterMovement extends Component {
    start() {
    }

    @property(CCFloat)
    speed: number = 200;

    _direction: Vec2 = Vec2.ZERO;
    get direction(): Vec2 { return this._direction; }
    private set direction(v: Vec2) { this._direction = v; }

    update(deltaTime: number) {
        if (!this.direction.equals(Vec2.ZERO, 0.01)) {
            let currentPosition = this.node.getWorldPosition();
            this.node.setWorldPosition(currentPosition.add(this.direction.normalize().multiplyScalar(deltaTime * this.speed).toVec3()));
        }
    }

    public SetMovementDirection(direction: Vec2) {
        this.direction = direction.normalize();
    }
}


