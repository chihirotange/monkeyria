import { _decorator, Component, EventKeyboard, Input, input, KeyCode, Vec2 } from 'cc';
import { CharacterMovement } from './CharacterMovement';
import { GameManager } from './GameManager';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('PlayerController')
@requireComponent(CharacterMovement)
export class PlayerController extends Component {
    characterMovement: CharacterMovement = null;

    start() {
        this.listenForInputEvents();
        this.characterMovement = this.getComponent(CharacterMovement);
    }

    _movementInputDirection: Vec2 = Vec2.ZERO;

    update(deltaTime: number) {
        let horizontalMovement = this.pressedKeys.has(KeyCode.KEY_A) ? -1 : this.pressedKeys.has(KeyCode.KEY_D) ? 1 : 0;
        let verticalMovement = this.pressedKeys.has(KeyCode.KEY_S) ? -1 : this.pressedKeys.has(KeyCode.KEY_W) ? 1 : 0;
        let movementInputDirection = new Vec2(horizontalMovement, verticalMovement);

        if (this.characterMovement && !this._movementInputDirection.equals(movementInputDirection, 0.01)) {

            this._movementInputDirection = movementInputDirection;
            this.characterMovement.SetMovementDirection(this._movementInputDirection);
        }
    }

    listenForInputEvents() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    watchingKeys: Set<KeyCode> = new Set<KeyCode>([
        KeyCode.KEY_W,
        KeyCode.KEY_S,
        KeyCode.KEY_A,
        KeyCode.KEY_D
    ]);

    pressedKeys: Set<KeyCode> = new Set<KeyCode>();

    protected onKeyDown(event: EventKeyboard) {
        if (this.watchingKeys.has(event.keyCode)) {
            this.pressedKeys.add(event.keyCode);
        }
        
        // Example: Pause game with P key
        if (event.keyCode === KeyCode.KEY_P) {
            // if (GameManager.instance.isPaused) {
            //     GameManager.instance.resumeGame();
            // } else {
            //     GameManager.instance.pauseGame();
            // }
        }
        
        // Example: Add score with SPACE key
        if (event.keyCode === KeyCode.SPACE) {
            GameManager.instance.addMoney(10);
        }
    }

    protected onKeyUp(event: EventKeyboard) {
        if (this.watchingKeys.has(event.keyCode)) {
            this.pressedKeys.delete(event.keyCode);
        }
    }
}

