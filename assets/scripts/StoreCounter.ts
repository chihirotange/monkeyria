import { _decorator, Component, Node } from 'cc';
import { ResourceBin } from './ResourceBin';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('StoreCounter')
export class StoreCounter extends ResourceBin {

    start(): void {
        GameManager.instance.addTaskLocation(this.node, ['counter']);
    }
}
