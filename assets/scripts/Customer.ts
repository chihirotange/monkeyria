import { _decorator } from 'cc';
import { StateMachine } from './statemachine/StateMachine';
import { IdleState } from './ai/states/IdleState';
import { MoveToDestinationState } from './ai/states/MoveToDestinationState';
import { WaitForInteractionState } from './ai/states/WaitForInteractionState';
import { ItemType } from './ItemType';
import { ResourceDictionary } from './ResourceDictionary';
import { CustomerFindDestinationState } from './ai/states/CustomerFindDestinationState';
import { Character } from './Character';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('Customer')
@requireComponent(StateMachine)
export class Customer extends Character {

    itemList: Map<ItemType, number> = new Map();
    
    private _stateMachine: StateMachine = null;

    protected onEnable(): void {
        this._stateMachine = this.getComponent(StateMachine);
        this._stateMachine.addState(IdleState, true)
            .addState(CustomerFindDestinationState)
            .addState(MoveToDestinationState)
            .addState(WaitForInteractionState)
            .addTransition(
                IdleState,
                CustomerFindDestinationState,
                (from, to) => {
                    return (this._stateMachine.currentState as IdleState).idleDuration <= 0;
                }
            )
            .addTransition(
                CustomerFindDestinationState,
                MoveToDestinationState,
                (from, to) => {
                    return (this._stateMachine.currentState as CustomerFindDestinationState).found;
                }
            )
            .addTransition(
                MoveToDestinationState,
                WaitForInteractionState,
                (from, to) => {
                    return (this._stateMachine.currentState as MoveToDestinationState).isTargetReached;
                }
            )
            .addTransition(
                WaitForInteractionState,
                CustomerFindDestinationState,
                (from, to, system) => {
                    let allFulfilled = true;
                    for (const [itemType, amount] of this.itemList) {
                        if (this.getInventory().getResourceAmount(itemType) < amount) {
                            allFulfilled = false;
                            break;
                        }
                    }
                    return allFulfilled;
                }
            );
    }

    start(): void {
        super.start();
        this.decideItemList();
        this._stateMachine.startSystem();
    }

    decideItemList() {
        let resourceDefs = ResourceDictionary.instance.resourceDefinitions;
        const randomIndex = Math.floor(Math.random() * resourceDefs.length);
        let def = resourceDefs[randomIndex];
        // TODO: random amount of item
        this.itemList.set(def.itemType, 3);
        this.getInventory().setResourceLimit(3);
    }
}
