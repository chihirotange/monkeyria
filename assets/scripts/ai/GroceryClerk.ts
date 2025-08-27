import { __private, _decorator, Component, Node } from 'cc';
import { State, StateConstructor, StateMachine } from '../statemachine/StateMachine';
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

    canChangeState<T extends State>(from: StateConstructor, to: StateConstructor): boolean {
        if (from == IdleState && to == FindDestinationState) {
            return (this._currentState as IdleState).idleDuration <= 0;
        }
        if (from == FindDestinationState && to == MoveToDestinationState) {
            return (this._currentState as FindDestinationState).found;
        }
        if (from == MoveToDestinationState && to == WaitForInteractionState) {
            return (this._currentState as MoveToDestinationState).isTargetReached;
        }
        if (from == WaitForInteractionState && to == FindDestinationState) {
            return (this._currentState as WaitForInteractionState).doneWaiting;
        }
        return false;
    }

    protected start(): void {
        this.startSystem();
    }
}


