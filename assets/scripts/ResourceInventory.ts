import { _decorator } from 'cc';
import { ItemType } from './ItemType';

export class ResourceInventory {

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

export interface IHasInventory {
    getInventory(): ResourceInventory;
}