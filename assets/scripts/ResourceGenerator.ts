import { _decorator, CCFloat, CCInteger, Component, Node } from 'cc';
import { ItemType } from './ItemType';
import { PeriodInteractableObject } from './interactable/PeriodInteractableObject';
import { Character } from './Character';
import { ResourceInventory } from './ResourceInventory';
const { ccclass, property, type } = _decorator;

@ccclass('ResourceGenerator')
export class ResourceGenerator extends PeriodInteractableObject {
    @type(ItemType)
    itemType: ItemType = ItemType.None;
    
    @type(CCInteger)
    maxAmount: number = 1;

    @type(CCFloat)
    generatingInterval: number = 2;

    private _inventory: ResourceInventory = null;

    start(): void {
        super.start();
        this._inventory = this.getComponent(ResourceInventory);
        this._inventory.setResourceLimit(this.maxAmount);
        this.startGenerating();
    }

    startGenerating() {
        this.schedule(this.generateResource, this.generatingInterval);
    }

    stopGenerating() {
        this.unschedule(this.generateResource);
    }

    generateResource() {
        this._inventory.takeResource(this.itemType, 1);
    }

    processInterval(character: Character) {
        if (!character) {
            return;
        }

        let characterInventory = character.getComponent(ResourceInventory);
        if (!characterInventory)
        {
            return;
        }

        let toBeTaken = this._inventory.spendResource(this.itemType, 1);
        let takenAmount = characterInventory.takeResource(this.itemType, toBeTaken, true);
        let leftOver = toBeTaken - takenAmount;
        if (leftOver > 0)
        {
            this._inventory.takeResource(this.itemType, leftOver, true);
        }
    }
}


