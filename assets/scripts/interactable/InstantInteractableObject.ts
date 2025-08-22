import { _decorator, Component, Node } from 'cc';
import { InteractableObject } from './InteractableObject';
import { Character } from '../Character';
const { ccclass, property } = _decorator;

@ccclass('InstantInteractableObject')
export abstract class InstantInteractableObject extends InteractableObject {
    beginInteraction(character: Character): void {
        this.onBeginInteraction(character);
    }
    endInteraction(character: Character): void {
        this.onEndInteraction(character);
    }

    abstract onBeginInteraction(character: Character);
    abstract onEndInteraction(character: Character);
}


