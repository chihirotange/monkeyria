import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
import { ResourceGenerator } from './ResourceGenerator';
import { ItemType } from './ItemType';
import { ResourceDefinition, ResourceDictionary } from './ResourceDictionary';
import { LOG } from './FunctionalLibrary';
import { GameManager } from './GameManager';
const { ccclass, property, type } = _decorator;

@ccclass('CropTile')
export class CropTile extends ResourceGenerator {
    @type(Sprite)
    soilSprite: Sprite = null;

    @type(Sprite)
    cropSprite: Sprite = null;

    protected _resourceDefinition: ResourceDefinition = null;

    protected onEnable(): void {
        let dictionary = ResourceDictionary.instance;
        this._resourceDefinition = dictionary.resourceDefinitions.find((def) => def.itemType == this.itemType);
        if (!this._resourceDefinition) {
            LOG('CropTile', 'there is no defnition for resource type ' + this.itemType);
        }
        this.updateTileSprites(false);
        this._inventory.onResourceAdded(this.checkResourceAmount.bind(this));
        this._inventory.onResourceWithdrawn(this.checkResourceAmount.bind(this));
        this.checkResourceAmount(this.itemType, 0);
        GameManager.instance.addTaskLocation(this.node, ['crop', ItemType[this.itemType]]);
    }

    checkResourceAmount(itemType: ItemType, amount: number) {
        let itemAmount = 0;
        if (this._inventory != null) {
            itemAmount = this._inventory.getResourceAmount(this.itemType);
        }
        this.updateTileSprites(itemAmount > 0);
    }

    protected updateTileSprites(readyToHarvest: boolean) {
        let dictionary = ResourceDictionary.instance;

        if (readyToHarvest) {
            this.soilSprite.spriteFrame = this._resourceDefinition.readyToHarvestSoilSpriteFrame ?
                this._resourceDefinition.readyToHarvestSoilSpriteFrame : dictionary.defaultReadyToHarvestSoilSpriteFrame;
            this.cropSprite.spriteFrame = this._resourceDefinition.spriteFrames[1];
        }
        else {
            this.soilSprite.spriteFrame = this._resourceDefinition.soilSpriteFrame ?
                this._resourceDefinition.soilSpriteFrame : dictionary.defaultSoilSpriteFrame;
            this.cropSprite.spriteFrame = this._resourceDefinition.spriteFrames[0];
        }
    }
}
