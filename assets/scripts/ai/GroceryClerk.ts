import { __private, _decorator, Component, Node } from 'cc';
import { State, StateMachine } from '../statemachine/StateMachine';
import { IdleState } from './states/IdleState';
import { FindDestinationState } from './states/FindDestinationState';
import { MoveToDestinationState } from './states/MoveToDestinationState';
import { WaitForInteractionState } from './states/WaitForInteractionState';
const { ccclass, property } = _decorator;

@ccclass('GroceryClerk')
export class GroceryClerk extends StateMachine {
    protected onEnable(): void {
        this.addState(IdleState, true)
            .addState(FindDestinationState)
            .addState(MoveToDestinationState)
            .addState(WaitForInteractionState)
            .addTransition(IdleState, FindDestinationState)
            .addTransition(FindDestinationState, MoveToDestinationState)
            .addTransition(MoveToDestinationState, WaitForInteractionState)
            .addTransition(WaitForInteractionState, FindDestinationState);
    }

    canChangeState<T extends State>(from: __private.__types_globals__Constructor<T>, to: __private.__types_globals__Constructor<T>): boolean {
        if (from == IdleState && to == FindDestinationState) {
            // should wait for sometimes
        }
        if (from == FindDestinationState && to == MoveToDestinationState) {
            // found the destination
        }
        if (from == MoveToDestinationState && to == WaitForInteractionState) {
            // reached destination
        }
        if (from == WaitForInteractionState && to == FindDestinationState) {
            // done interaction
        }
        return false;
    }
}


