import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
import { ResourceGenerator } from './ResourceGenerator';
import { ItemType } from './ItemType';
const { ccclass, property, type } = _decorator;

@ccclass('CropTile')
export class CropTile extends ResourceGenerator {

    @type(SpriteFrame)
    defaultSoilSpriteFrame: SpriteFrame = null;

    @type(SpriteFrame)
    readyToHarvestSoilSpriteFrame: SpriteFrame = null;

    @type(SpriteFrame)
    defaultCropSpriteFrame: SpriteFrame = null;

    @type(SpriteFrame)
    readyToHarvestCropSpriteFrame: SpriteFrame = null;

    @type(Sprite)
    soilSprite: Sprite = null;

    @type(Sprite)
    cropSprite: Sprite = null;

    protected onEnable(): void {
        this.updateTileSprites(false);
        this._inventory.onResourceAdded(this.checkResourceAmount.bind(this));
        this._inventory.onResourceWithdrawn(this.checkResourceAmount.bind(this));
        this.checkResourceAmount(this.itemType, 0);
    }

    checkResourceAmount(itemType: ItemType, amount: number) {
        let itemAmount = 0;
        if (this._inventory != null)
        {
            itemAmount = this._inventory.getResourceAmount(this.itemType);
        }
        this.updateTileSprites(itemAmount > 0);
    }

    protected updateTileSprites(readyToHarvest: boolean) {
        if (readyToHarvest) {

            this.soilSprite.spriteFrame = this.readyToHarvestSoilSpriteFrame;
            this.cropSprite.spriteFrame = this.readyToHarvestCropSpriteFrame;
        }
        else {
            this.soilSprite.spriteFrame = this.defaultSoilSpriteFrame;
            this.cropSprite.spriteFrame = this.defaultCropSpriteFrame;
        }
    }
}
