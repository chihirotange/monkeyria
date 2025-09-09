import { _decorator, CCInteger, CCString } from 'cc';
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
        type: [CCString],
        group: 'ResourceBin'
    })
    requiredTagsToWithdraw: string[] = [];

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

    @property({
        type: [CCString],
        group: 'ResourceBin'
    })
    requiredTagsToDeposit: string[] = [];

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

        this.withdrawResources(character);
        this.depositResources(character);
    }

    withdrawResources(character: Character) {
        if (this.itemTypeToWithdraw == ItemType.None) {
            return;
        }

        if (!FunctionalLibrary.checkCharacterRequiredTags(character, this.requiredTagsToWithdraw)) {
            return;
        }

        let characterInventory = character.getInventory();
        if (!characterInventory) {
            return;
        }

        FunctionalLibrary.transferResource(this._inventory, characterInventory, this.itemTypeToWithdraw, this.withdrawAmount);
    }

    depositResources(character: Character) {
        if (this.itemTypeToDeposit == ItemType.None) {
            return;
        }

        if (!FunctionalLibrary.checkCharacterRequiredTags(character, this.requiredTagsToDeposit)) {
            return;
        }

        let characterInventory = character.getInventory();
        if (!characterInventory) {
            return;
        }

        FunctionalLibrary.transferResource(characterInventory, this._inventory, this.itemTypeToDeposit, this.depositAmount);
    }
}



