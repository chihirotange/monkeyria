import { _decorator, CCFloat, Component, Node } from 'cc';
import { InteractableObject } from './InteractableObject';
import { Character } from '../Character';
const { ccclass, type, property } = _decorator;

@ccclass('PeriodInteractableObject')
export abstract class PeriodInteractableObject extends InteractableObject {

    @property({
        type: CCFloat,
        group: "InteractableObject"
    })
    period: number = 1;

    private _scheduledCallbacks: Map<Character, Function> = new Map();

    beginInteraction(character: Character): void {
        if (this._scheduledCallbacks.has(character)) return;
        const callback = () => this.processInterval(character);
        this._scheduledCallbacks.set(character, callback);
        this.schedule(callback, this.period);
    }

    endInteraction(character: Character): void {
        const callback = this._scheduledCallbacks.get(character);
        if (callback) {
            this.unschedule(callback);
            this._scheduledCallbacks.delete(character);
        }
    }

    abstract processInterval(character: Character);
}


