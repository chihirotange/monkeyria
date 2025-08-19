import { _decorator, CCFloat, Component, Node, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterMovement')
export class CharacterMovement extends Component {

    @property({ type: CCFloat })
    speed: number = 200;

    start() {

    }

    update(deltaTime: number) {
        if (this._direction.equals(Vec2.ZERO, 0.01))
        {
            return;
        }
        let newPosition = this.node.getPosition();
        this.node.setPosition(
            newPosition.add(
                this._direction.normalize()
                    .multiplyScalar(deltaTime * this.speed)
                    .toVec3()
            )
        );
    }

    _direction: Vec2 = Vec2.ZERO;
    public setMovementInput(direction: Vec2) {
        this._direction = direction;
    }
}


