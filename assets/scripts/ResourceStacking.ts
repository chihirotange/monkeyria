import { _decorator, CCFloat, Component, instantiate, Node, Prefab, Sprite, Vec2 } from 'cc';
import { Character } from './Character';
import { ItemType } from './ItemType';
import { ResourceDictionary } from './ResourceDictionary';
const { ccclass, property, type } = _decorator;

@ccclass('ResourceStacking')
export class ResourceStacking extends Component {

    @type(Prefab)
    stackItem: Prefab = null;

    @type(CCFloat)
    offset: number = 20;

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
        // TODO: assign type to stack item
        let definition = ResourceDictionary.instance.findDefintion(itemType);
        if (definition) {
            let item = instantiate(this.stackItem);
            let sprite = item.getComponent(Sprite);
            sprite.spriteFrame = definition.spriteFrames[2];
            item.parent = this.node;
            item.setPosition(0, this.stack.length * this.offset, 0);
            this.stack.push(item);
        }
    }

    private onResourceWithdrawn(itemType: ItemType, amount: number) {
        // TODO: remove by item type
        for (let i = 0; i < amount; i++) {
            const item = this.stack.pop();
            if (item) {
                item.destroy();
            }
        }
    }
}


