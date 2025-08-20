import { EventTarget, Node } from "cc";


export enum ContainerEventType {
    ItemAdded = "container-item-added",
    ItemRemoved = "container-item-removed"
}
export class SetWithEvents<T> extends Set<T> {


    public eventTarget = new EventTarget;

    add(value: T): this {
        super.add(value);
        this.eventTarget.emit(ContainerEventType.ItemAdded, this, value);
        return this;
    }

    delete(value: T): boolean {
        let existed = super.delete(value);
        if (existed)
        {
            this.eventTarget.emit(ContainerEventType.ItemRemoved, this, value);
        }
        return existed;
    }
}