import { _decorator, Component, EventKeyboard, Input, input, KeyCode, Node, SystemEvent, Vec2 } from 'cc';
import { CharacterMovement } from './CharacterMovement';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('PlayerController')
@requireComponent(CharacterMovement)
export class PlayerController extends Component {

    movementInput: Vec2 = Vec2.ZERO;
    characterMovement: CharacterMovement = null;

    start() {
        this.characterMovement = this.node.getComponent(CharacterMovement);
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    update(deltaTime: number) {
        if (this.movementInput.lengthSqr() > 0)
        {
            this.characterMovement.setMovementInput(this.movementInput);
        }
    }

    protected onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_UP:
                this.movementInput = new Vec2(this.movementInput.x, 1);
                break;
            case KeyCode.ARROW_DOWN:
                this.movementInput = new Vec2(this.movementInput.x, -1);
                break;
            case KeyCode.ARROW_LEFT:
                this.movementInput = new Vec2(-1, this.movementInput.y);
                break;
            case KeyCode.ARROW_RIGHT:
                this.movementInput = new Vec2(1, this.movementInput.y);
                break;
            default:
                break;
        }
    }

    protected onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.ARROW_UP:
            case KeyCode.ARROW_DOWN:
                this.movementInput = new Vec2(this.movementInput.x, 0);
                break;
            case KeyCode.ARROW_LEFT:
            case KeyCode.ARROW_RIGHT:
                this.movementInput = new Vec2(0, this.movementInput.y);
                break;
            default:
                break;
        }
        if (this.movementInput.equals(Vec2.ZERO, .01))
        {
            this.characterMovement.setMovementInput(Vec2.ZERO);
        }
    }
}

