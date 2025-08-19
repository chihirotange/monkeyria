import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node } from 'cc';
import { Character } from './Character';
const { ccclass, property } = _decorator;

@ccclass('InteractableObject')
export class InteractableObject extends Component {

    _colliderComp: Collider2D = null;

    _interactingCharacter: Set<Character> = new Set<Character>();

    start() {
        this._colliderComp = this.getComponent(Collider2D);
        this.setupCollisionCheck();
    }

    update(deltaTime: number) {

    }

    setupCollisionCheck() {
        if (this._colliderComp) {
            this._colliderComp.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            this._colliderComp.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact) {
        let character = otherCollider.getComponent(Character);
        if (character) {
            this._interactingCharacter.add(character);
        }
    }

    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact) {
        let character = otherCollider.getComponent(Character);
        if (character) {
            this._interactingCharacter.delete(character);
        }
    }
}


