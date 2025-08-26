import { _decorator, Component, Node, Sprite } from 'cc';
import { Character } from './Character';
import { ItemType } from './ItemType';
import { ResourceDictionary } from './ResourceDictionary';
const { ccclass, property } = _decorator;

@ccclass('ResourceStacking')
export class ResourceStacking extends Component {
    private _character: Character = null;
    private stack: Node[] = [];
    start() {
        let parent = this.node.parent;
        if (!parent) {
            this.node.destroy();
        }

        this._character = parent.getComponent(Character);
        if (!this._character) {
            this.node.destroy();
        }

        this._character.getInventory().onResourceAdded(this.onResourceAdded.bind(this));
        this._character.getInventory().onResourceWithdrawn(this.onResourceWithdrawn.bind(this));
    }

    private onResourceAdded(itemType: ItemType, amount: number) {
        let definition = ResourceDictionary.instance.findDefintion(itemType);
        if (definition) {
            let node = new Node();
            let sprite = node.addComponent(Sprite);
            sprite.spriteFrame = definition.spriteFrames[3];
            node.parent = this.node;
            node.setPosition(0, this.stack.length * 32, 0); // Adjust 32 to your sprite size

            this.stack.push(node);
        }
    }

    private onResourceWithdrawn(itemType: ItemType, amount: number) {
        
    }
}


