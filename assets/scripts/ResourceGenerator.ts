import { _decorator, CCFloat, CCInteger, Component, Node } from 'cc';
import { ItemType } from './ItemType';
import { PeriodInteractableObject } from './interactable/PeriodInteractableObject';
import { Character } from './Character';
import { IHasInventory, ResourceInventory } from './ResourceInventory';
import { ResourceBin } from './ResourceBin';
const { ccclass, property, type, requireComponent } = _decorator;

@ccclass('ResourceGenerator')
@requireComponent(ResourceBin)
export class ResourceGenerator extends Component {
    
    @type(ItemType)
    itemType: ItemType = ItemType.None;
    
    @type(CCInteger)
    maxAmount: number = 1;

    @type(CCFloat)
    generatingInterval: number = 2;

    private _inventory: ResourceInventory = null;
    
    start(): void {
        this._inventory = this.getComponent(ResourceBin).getInventory();
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
        this._inventory.depositResource(this.itemType, 1);
    }
}


