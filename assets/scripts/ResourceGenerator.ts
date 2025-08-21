import { _decorator, CCFloat, CCInteger, Component, Node } from 'cc';
import { InteractableObject } from './InteractableObject';
import { ItemType } from './ItemType';
const { ccclass, property, type } = _decorator;

@ccclass('ResourceGenerator')
export class ResourceGenerator extends InteractableObject {
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
}


