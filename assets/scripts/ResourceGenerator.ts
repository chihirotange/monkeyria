import { _decorator, CCFloat, CCInteger, Component, Node } from 'cc';
import { ItemType } from './ItemType';
import { PeriodInteractableObject } from './interactable/PeriodInteractableObject';
import { Character } from './Character';
const { ccclass, property, type } = _decorator;

@ccclass('ResourceGenerator')
export class ResourceGenerator extends PeriodInteractableObject {
    @type(ItemType)
    itemType: ItemType = ItemType.None;
    
    @type(CCInteger)
    maxAmount: number = 1;

    @type(CCFloat)
    generatingInterval: number = 2;

    private _currentAmount: number = 0;

    start(): void {
        super.start();
        this.startGenerating();
    }

    startGenerating() {
        this.schedule(this.generateResource, this.generatingInterval);
    }

    stopGenerating() {
        this.unschedule(this.generateResource);
    }

    generateResource() {
        if (this._currentAmount < this.maxAmount)
        {
            this._currentAmount++;
        }
    }

    processInterval(character: Character) {
        if (!character) {
            return;
        }
        if (this._currentAmount == 0)
        {
            return;
        }
        // character.takeResource(this.itemType, 1);
        this._currentAmount--;
    }
}


