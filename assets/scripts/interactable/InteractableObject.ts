import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node } from 'cc';
import { Character } from '../Character';
import { ContainerEventType, SetWithEvents } from '../containers/SetWithEvent';
const { ccclass, property } = _decorator;

@ccclass('InteractableObject')
export abstract class InteractableObject extends Component {

    protected _colliderComp: Collider2D = null;

    protected _interactingCharacters: SetWithEvents<Character> = new SetWithEvents<Character>();
    get interactingCharacter(): SetWithEvents<Character> {
        return this._interactingCharacters;
    }

    start() {
        this._colliderComp = this.getComponent(Collider2D);
        this.setupCollisionCheck();
        this._interactingCharacters.eventTarget.on(ContainerEventType.ItemAdded, function (container, item) {
            this.onInteractingCharacterAdded(container, item);
        }.bind(this));
        this._interactingCharacters.eventTarget.on(ContainerEventType.ItemRemoved, function (container, item) {
            this.onInteractingCharacterRemoved(container, item);
        }.bind(this));
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
            this._interactingCharacters.add(character);
        }
    }

    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact) {
        let character = otherCollider.getComponent(Character);
        if (character) {
            this._interactingCharacters.delete(character);
        }
    }

    onInteractingCharacterAdded(container: SetWithEvents<Character>, character: Character) {
    }

    onInteractingCharacterRemoved(container: SetWithEvents<Character>, character: Character) {
    }

    abstract beginInteraction(character: Character): void;

    abstract endInteraction(character: Character): void;
}


