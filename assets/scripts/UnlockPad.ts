import { _decorator, CCInteger, Collider2D, Component, Contact2DType, Node, Prefab } from 'cc';
import { InteractableObject } from './InteractableObject';
import { Character } from './Character';
import { SetWithEvents } from './containers/SetWithEvent';
const { ccclass, property, type } = _decorator;

@ccclass('UnlockPad')
export class UnlockPad extends InteractableObject {

    @type(Prefab)
    unlockedPrefab: Prefab = null;

    @type(CCInteger)
    requiredCoin: number = 50;

    onInteractingCharacterAdded(container: SetWithEvents<Character>, character: Character): void {
        // schedule depleting coins
    }

    onInteractingCharacterRemoved(container: SetWithEvents<Character>, character: Character): void {
        // check if there is no interating character then cancel the schedule
    }

    
}
