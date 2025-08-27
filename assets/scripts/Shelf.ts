import { _decorator, CCInteger, EventHandler, EventTarget, instantiate, Node, Prefab, Sprite, UITransform } from 'cc';
import { ResourceBin } from './ResourceBin';
import { ItemType } from './ItemType';
import { ResourceDictionary } from './ResourceDictionary';
const { ccclass, property, requireComponent, type } = _decorator;

@ccclass('Shelf')
export class Shelf extends ResourceBin {

    @type(Node)
    itemContainer: Node = null;

    @type(Prefab)
    itemPrefab: Prefab = null;

    @type(CCInteger)
    rowCount: number = 4;

    @type(CCInteger)
    colCount: number = 5;

    start() {
        let inventory = this.getInventory();
        inventory.onResourceAdded(this.onResourceAdded.bind(this));
        inventory.onResourceWithdrawn(this.onResourceWithdrawn.bind(this));
    }

    protected onResourceAdded(itemType: ItemType, amount: number) {
        let definition = ResourceDictionary.instance.findDefintion(itemType);
        if (definition) {
            let item = instantiate(this.itemPrefab);
            let sprite = item.getComponent(Sprite);
            sprite.spriteFrame = definition.spriteFrames[2];
            item.parent = this.itemContainer;

            // Get transforms
            const shelfTransform = this.itemContainer.getComponent(UITransform);
            const itemTransform = item.getComponent(UITransform);

            // Shelf size and anchor
            const shelfWidth = shelfTransform.width;
            const shelfHeight = shelfTransform.height;
            const shelfAnchorX = shelfTransform.anchorX;
            const shelfAnchorY = shelfTransform.anchorY;

            // Item size and anchor
            const itemWidth = itemTransform.width;
            const itemHeight = itemTransform.height;
            const itemAnchorX = itemTransform.anchorX;
            const itemAnchorY = itemTransform.anchorY;

            // Calculate grid cell size
            const cellWidth = shelfWidth / this.colCount;
            const cellHeight = shelfHeight / this.rowCount;

            // Calculate grid position
            const index = this.itemContainer.children.length - 1; // -1 because item is already added
            const col = index % this.colCount;
            const row = Math.floor(index / this.colCount);

            // Calculate origin (bottom-left of grid in local space)
            const originX = -shelfWidth * shelfAnchorX;
            const originY = -shelfHeight * shelfAnchorY;

            // Center item in its cell
            const x = originX + cellWidth * col + cellWidth / 2;
            const y = originY + cellHeight * (this.rowCount - row - 1) + cellHeight / 2;

            // Adjust for item anchor (so item is centered)
            const finalX = x - itemWidth * (itemAnchorX - 0.5);
            const finalY = y - itemHeight * (itemAnchorY - 0.5);

            item.setPosition(finalX, finalY, 0);
        }
    }

    protected onResourceWithdrawn(itemType: ItemType, amount: number) {

    }
}


