import { __private, _decorator, Component, Node } from 'cc';
import { State, StateConstructor, StateMachine } from '../statemachine/StateMachine';
import { IdleState } from './states/IdleState';
import { FindDestinationState } from './states/FindDestinationState';
import { MoveToDestinationState } from './states/MoveToDestinationState';
import { WaitForInteractionState } from './states/WaitForInteractionState';
import { Character } from '../Character';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('GroceryClerk')
@requireComponent(StateMachine)
export class GroceryClerk extends Character {
    _stateMachine: StateMachine = null;

    protected onEnable(): void {
        this._stateMachine = this.getComponent(StateMachine);
        this._stateMachine.addState(IdleState, true)
            .addState(FindDestinationState)
            .addState(MoveToDestinationState)
            .addState(WaitForInteractionState)
            .addTransition(
                IdleState,
                FindDestinationState,
                (from, to) => {
                    return (this._stateMachine.currentState as IdleState).idleDuration <= 0;
                }
            )
            .addTransition(
                FindDestinationState,
                MoveToDestinationState,
                (from, to) => {
                    return (this._stateMachine.currentState as FindDestinationState).found;
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
                FindDestinationState,
                (from, to) => {
                    return (this._stateMachine.currentState as WaitForInteractionState).doneWaiting;
                }
            );
    }

    start(): void {
        super.start();
        this._stateMachine.startSystem();
    }
}


