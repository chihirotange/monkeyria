import { _decorator, Component, Node } from 'cc';
import { ResourceBin } from './ResourceBin';
import { ResourceInventory } from './ResourceInventory';
import { ItemType } from './ItemType';
import { FunctionalLibrary } from './FunctionalLibrary';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('TrashBin')
export class TrashBin extends ResourceBin {

    protected onEnable(): void {
        GameManager.instance.addTaskLocation(this.node, ['trashbin']);
    }
    withdrawResources(characterInventory: ResourceInventory) {
        // Dont have to withdraw anything
    }

    depositResources(characterInventory: ResourceInventory) {
        for (const key in ItemType) {
            // Skip numeric keys (reverse mapping in TypeScript enums)
            if (isNaN(Number(key))) {
                const item = ItemType[key as keyof typeof ItemType] as ItemType;
                let amount = characterInventory.getResourceAmount(item);
                if (amount > 0)
                {
                    FunctionalLibrary.transferResource(
                        characterInventory,
                        this._inventory,
                        item,
                        this.depositAmount
                    );
                }
            }
        }
    }
}


