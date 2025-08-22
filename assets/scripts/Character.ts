import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node } from 'cc';
import { InteractableObject } from './interactable/InteractableObject';
const { ccclass, property } = _decorator;

@ccclass('Character')
export class Character extends Component {

    _collider: Collider2D = null;

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
    }

    endInteracting(interactable: InteractableObject) {
        if (!interactable) { return; }
        interactable.endInteraction(this);
    }
}


