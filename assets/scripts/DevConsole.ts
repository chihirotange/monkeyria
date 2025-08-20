import { _decorator, Component, EditBox, Label, Node, input, Input, EventKeyboard, KeyCode } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

/**
 * DevConsole - Simple in-game developer console for Cocos Creator
 * Attach this to a Canvas node with an EditBox and Label for output
 */
@ccclass('DevConsole')
export class DevConsole extends Component {
    @property({ type: EditBox })
    inputBox: EditBox = null;

    @property({ type: Label })
    outputLabel: Label = null;

    @property({ tooltip: 'Show console with this key (default: F1)' })
    toggleKey: KeyCode = KeyCode.F1;

    private _visible: boolean = false;


    onLoad() {
        this.setVisible(false);
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        if (this.inputBox) {
            this.inputBox.node.on('editing-return', this.onCommandSubmit, this);
            // Listen for F1 while EditBox is focused
            this.inputBox.node.on(Input.EventType.KEY_DOWN, this.onEditBoxKeyDown, this);
        }
    }


    onDestroy() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        if (this.inputBox) {
            this.inputBox.node.off('editing-return', this.onCommandSubmit, this);
            this.inputBox.node.off(Input.EventType.KEY_DOWN, this.onEditBoxKeyDown, this);
        }
    }
    onEditBoxKeyDown(event: EventKeyboard) {
        if (event.keyCode === this.toggleKey) {
            this.setVisible(false);
            event.propagationStopped = true;
        }
    }

    onCommandSubmit() {
        const command = this.inputBox.string.trim();
        if (command.length === 0) return;
        this.executeCommand(command);
        this.inputBox.string = '';
    }

    executeCommand(command: string) {
        // Example: addmoney 100
        const args = command.split(' ');
        const cmd = args[0].toLowerCase();
        let output = '';
        switch (cmd) {
            case 'addmoney':
                if (args.length > 1) {
                    const amount = parseInt(args[1]);
                    if (!isNaN(amount)) {
                        GameManager.instance?.addMoney(amount);
                        output = `Added ${amount} money.`;
                        this.print(output);
                        return;
                    }
                }
                output = 'Usage: addmoney <amount>';
                break;
        }
        this.print(output);
    }

    print(msg: string) {
        if (this.outputLabel) {
            this.outputLabel.string = msg;
        }
    }

    setVisible(visible: boolean) {
        this._visible = visible;
        this.node.active = visible;
        if (visible && this.inputBox) {
            this.inputBox.setFocus();
        }
    }

    onKeyDown(event: EventKeyboard) {
        if (event.keyCode === this.toggleKey) {
            if (this._visible) {
                // If closing, blur the EditBox to remove focus
                if (this.inputBox && this.inputBox.isFocused()) {
                    this.inputBox.blur();
                }
                this.setVisible(false);
            } else {
                this.setVisible(true);
            }
        }
    }
}
