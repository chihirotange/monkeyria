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
    
    startGenerating() {
        
    }
    
    stopGenerating() {
        
    }
    
    generateResource() {
        
    }

    processInterval(character: Character) {
        // let character take resource
    }
}


