import { _decorator } from 'cc';
import { ItemType } from './ItemType';

type ResourceEventCallback = (itemType: ItemType, amount: number) => void;

export class ResourceInventory {

    private _resourceMap: Map<ItemType, number> = new Map<ItemType, number>();
    private _resourceLimit: number = 4; // total limit for all resources

    // Event callbacks
    private _onResourceAdded: ResourceEventCallback[] = [];
    private _onResourceWithdrawn: ResourceEventCallback[] = [];

    setResourceLimit(limit: number) {
        if (limit < 0) return;
        this._resourceLimit = limit;
    }

    getResourceLimit(): number {
        return this._resourceLimit;
    }

    getTotalResourceAmount(): number {
        let total = 0;
        for (const amount of this._resourceMap.values()) {
            total += amount;
        }
        return total;
    }

    /**
     * Subscribe to resource added event.
     */
    onResourceAdded(callback: ResourceEventCallback) {
        this._onResourceAdded.push(callback);
    }

    /**
     * Subscribe to resource withdrawn event.
     */
    onResourceWithdrawn(callback: ResourceEventCallback) {
        this._onResourceWithdrawn.push(callback);
    }

    /**
     * Try to deposit resource. Returns the amount actually depositn (0 if none).
     * If allowPartial is false, only deposit if the full amount fits.
     * If allowPartial is true (default), deposit as much as possible.
     */
    depositResource(itemType: ItemType, amount: number, allowPartial: boolean = true): number {
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

        // Fire event
        this._onResourceAdded.forEach(cb => cb(itemType, addAmount));

        return addAmount;
    }

    /**
     * Withdraw resource. If allowPartial is true, withdraw as much as possible (if > 0), and return the actual spent amount.
     * If allowPartial is false, only withdraw if enough is available, and return the spent amount (0 if not enough).
     */
    withdrawResource(itemType: ItemType, amount: number, allowPartial: boolean = false): number {
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

            // Fire event
            this._onResourceWithdrawn.forEach(cb => cb(itemType, spent));

            return spent;
        } else {
            if (current < amount) {
                return 0;
            }
        }
        this._resourceMap.set(itemType, current - amount);

        // Fire event
        this._onResourceWithdrawn.forEach(cb => cb(itemType, amount));

        return amount;
    }

    /**
     * Get the current amount of a specific resource type.
     */
    getResourceAmount(itemType: ItemType): number {
        return this._resourceMap.get(itemType) || 0;
    }

    /**
     * Get all resource types currently carried with their amounts.
     */
    getAllResources(): { itemType: ItemType, amount: number }[] {
        const result: { itemType: ItemType, amount: number }[] = [];
        for (const [itemType, amount] of this._resourceMap.entries()) {
            if (amount > 0) {
                result.push({ itemType, amount });
            }
        }
        return result;
    }
}

export interface IHasInventory {
    getInventory(): ResourceInventory;
}