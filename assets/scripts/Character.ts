import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node } from 'cc';
import { InteractableObject } from './interactable/InteractableObject';
import { ItemType } from './ItemType';
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

    private _resourceMap: Map<ItemType, number> = new Map<ItemType, number>();
    private _resourceLimit: number = 99; // total limit for all resources

    setResourceLimit(limit: number) {
        if (limit < 0) return;
        this._resourceLimit = limit;
    }

    getTotalResourceAmount(): number {
        let total = 0;
        for (const amount of this._resourceMap.values()) {
            total += amount;
        }
        return total;
    }

    /**
     * Try to take resource. Returns the amount actually taken (0 if none).
     * If allowPartial is false, only take if the full amount fits.
     * If allowPartial is true (default), take as much as possible.
     */
    takeResource(itemType: ItemType, amount: number, allowPartial: boolean = true): number {
        if (!itemType || amount <= 0) {
            return 0;
        }
        const current = this._resourceMap.get(itemType) || 0;
        const total = this.getTotalResourceAmount();
        const spaceLeft = this._resourceLimit - total;
        if (spaceLeft <= 0) {
            return 0;
        }
        if (!allowPartial && amount > spaceLeft) {
            return 0;
        }
        const addAmount = allowPartial ? Math.min(amount, spaceLeft) : amount;
        if (addAmount <= 0) {
            return 0;
        }
        this._resourceMap.set(itemType, current + addAmount);
        return addAmount;
    }

    /**
     * Spend resource. If allowPartial is true, spend as much as possible (if > 0), and return the actual spent amount.
     * If allowPartial is false, only spend if enough is available, and return the spent amount (0 if not enough).
     */
    spendResource(itemType: ItemType, amount: number, allowPartial: boolean = false): number {
        if (!itemType || amount <= 0) {
            return 0;
        }
        const current = this._resourceMap.get(itemType) || 0;
        if (allowPartial) {
            if (current <= 0) {
                return 0;
            }
            const spent = Math.min(current, amount);
            this._resourceMap.set(itemType, current - spent);
            return spent;
        } else {
            if (current < amount) {
                return 0;
            }
        }
        this._resourceMap.set(itemType, current - amount); this._resourceMap.set(itemType, current - amount);
        return amount;
    }
}
