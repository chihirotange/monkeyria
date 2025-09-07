import { _decorator, CCFloat, Component, EventTarget, Node, RigidBody2D, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterMovement')
export class CharacterMovement extends Component {

    private _rb: RigidBody2D = null;

    private _eventTarget: EventTarget = new EventTarget();
    get event(): EventTarget {
        return this._eventTarget;
    }

    static readonly Event_StartMoving = 'start-moving';
    static readonly Event_StopMoving = 'stop-moving';

    start() {
        this._rb = this.getComponent(RigidBody2D);
    }

    @property(CCFloat)
    speed: number = 200;

    _direction: Vec2 = Vec2.ZERO;
    get direction(): Vec2 { return this._direction; }
    private set direction(v: Vec2) { this._direction = v; }

    update(deltaTime: number) {
        // if (!this.direction.equals(Vec2.ZERO, 0.01)) {
        //     let currentPosition = this.node.getWorldPosition();
        //     this.node.setWorldPosition(currentPosition.add(this.direction.normalize().multiplyScalar(deltaTime * this.speed).toVec3()));
        // }
    }

    protected lateUpdate(dt: number): void {
        
    }

    public SetMovementDirection(direction: Vec2) {
        if (!this.direction.equals(direction, 1e-3)) {
            if (this.direction.equals(Vec2.ZERO, 1e-3)) {
                this._eventTarget.emit(CharacterMovement.Event_StartMoving, this);
            } else if (direction.equals(Vec2.ZERO, 1e-3)) {
                this._eventTarget.emit(CharacterMovement.Event_StopMoving, this);
            }
            this.direction = direction.normalize();
        }

        let velocity = this.direction.multiplyScalar(this.speed);
        this._rb.linearVelocity = velocity;
    }
}


