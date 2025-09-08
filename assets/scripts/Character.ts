import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node } from 'cc';
import { InteractableObject } from './interactable/InteractableObject';
import { IHasInventory, ResourceInventory } from './ResourceInventory';
const { ccclass, property } = _decorator;

export type CharacterInteractingCallback = (character: Character, interactable: InteractableObject) => void;

@ccclass('Character')
export class Character extends Component implements IHasInventory {

    _collider: Collider2D = null;
    private _inventory: ResourceInventory = null;

    onBeginInteracting: CharacterInteractingCallback[] = [];
    onEndInteracting: CharacterInteractingCallback[] = [];

    protected onLoad(): void {
        this._inventory = new ResourceInventory();
    }

    start() {
        this._collider = this.getComponent(Collider2D);
        if (this._collider) {
            this._collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            this._collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact) {
        this.beginInteracting(otherCollider.getComponent(InteractableObject));
    }

    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact) {
        this.endInteracting(otherCollider.getComponent(InteractableObject));
    }

    beginInteracting(interactable: InteractableObject) {
        if (!interactable) { return; }
        interactable.beginInteraction(this);
        this.onBeginInteracting.forEach(callback => {
            callback(this, interactable);
        });
    }

    endInteracting(interactable: InteractableObject) {
        if (!interactable) { return; }
        interactable.endInteraction(this);
        this.onEndInteracting.forEach(callback => {
            callback(this, interactable);
        })
    }

    getInventory(): ResourceInventory {
        return this._inventory;
    }
}
