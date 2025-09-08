import { _decorator, Component, Node } from 'cc';
import { State, StateConstructor, StateMachine } from './statemachine/StateMachine';
import { FindDestinationState } from './ai/states/FindDestinationState';
import { IdleState } from './ai/states/IdleState';
import { MoveToDestinationState } from './ai/states/MoveToDestinationState';
import { WaitForInteractionState } from './ai/states/WaitForInteractionState';
const { ccclass, property } = _decorator;

@ccclass('Customer')
export class Customer extends StateMachine {
    protected onEnable(): void {
        this.addState(IdleState, true)
            .addState(FindDestinationState)
            .addState(MoveToDestinationState)
            .addState(WaitForInteractionState)
            .addTransition(
                IdleState,
                FindDestinationState,
                (from, to) => {
                    return (this._currentState as IdleState).idleDuration <= 0;
                }
            )
            .addTransition(
                FindDestinationState,
                MoveToDestinationState,
                (from, to) => {
                    return (this._currentState as FindDestinationState).found;
                }
            )
            .addTransition(
                MoveToDestinationState,
                WaitForInteractionState,
                (from, to) => {
                    return (this._currentState as MoveToDestinationState).isTargetReached;
                }
            )
            .addTransition(
                WaitForInteractionState,
                FindDestinationState,
                (from, to) => {
                    return (this._currentState as WaitForInteractionState).doneWaiting;
                }
            );
    }

}


