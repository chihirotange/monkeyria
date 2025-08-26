import { _decorator, CCInteger } from 'cc';
import { PeriodInteractableObject } from './interactable/PeriodInteractableObject';
import { Character } from './Character';
import { IHasInventory, ResourceInventory } from './ResourceInventory';
import { ItemType } from './ItemType';
import { FunctionalLibrary } from './FunctionalLibrary';
const { ccclass, property, type } = _decorator;

@ccclass('ResourceBin')
export class ResourceBin extends PeriodInteractableObject implements IHasInventory {

    @property({
        type: ItemType,
        group: 'ResourceBin'
    })
    itemTypeToWithdraw: ItemType = ItemType.None;

    @property({
        type: CCInteger,
        group: 'ResourceBin'
    })
    withdrawAmount: number = 0;

    @property({
        type: ItemType,
        group: 'ResourceBin'
    })
    itemTypeToDeposit: ItemType = ItemType.None;

    @property({
        type: CCInteger,
        group: 'ResourceBin'
    })
    depositAmount: number = 0;

    protected _inventory: ResourceInventory = null;

    protected onLoad(): void {
        this._inventory = new ResourceInventory();
    }

    getInventory(): ResourceInventory {
        return this._inventory;
    }

    processInterval(character: Character) {
         if (!character) {
            return;
        }

        let characterInventory = character.getInventory();
        if (!characterInventory)
        {
            return;
        }

        this.withdrawResources(characterInventory);
        this.depositResources(characterInventory);
    }
    
    withdrawResources(characterInventory: ResourceInventory) {
        if (this.itemTypeToWithdraw == ItemType.None)
        {
            return;
        }

        FunctionalLibrary.transferResource(this._inventory, characterInventory, this.itemTypeToWithdraw, this.withdrawAmount);
    }
    
    depositResources(characterInventory: ResourceInventory) {
        if (this.itemTypeToDeposit == ItemType.None)
        {
            return;
        }

        FunctionalLibrary.transferResource(characterInventory, this._inventory, this.itemTypeToDeposit, this.depositAmount);
    }
}



