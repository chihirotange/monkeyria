import { __private, _decorator, CCBoolean, Component, Node } from 'cc';
const { ccclass, property, type } = _decorator;

export abstract class State {
    onStateEnter(prevState?: State): void { }
    onStateExit(nextState?: State): void { }
    onTransitionTo(nextState: State): void { }
    update(deltaTime: number): void { }
}

@ccclass('StateMachine')
export class StateMachine extends Component {
    protected _stateConstructors: Set<__private.__types_globals__Constructor<State>> = new Set();
    protected _currentState: State = null;
    protected _initialStateConstructor: __private.__types_globals__Constructor<State> = null;
    protected _transitions: Map<__private.__types_globals__Constructor<State>, Set<__private.__types_globals__Constructor<State>>> = new Map();
    protected _pendingTransition: {
        toCtor: __private.__types_globals__Constructor<State>,
        prevState: State
    } = null;

    update(deltaTime: number) {
        if (this._pendingTransition) {
            const { toCtor, prevState } = this._pendingTransition;
            const nextState = new toCtor();
            nextState.onStateEnter(prevState);
            prevState.onTransitionTo(nextState);
            this._currentState = nextState;
            this._pendingTransition = null;
        }
        else {
            if (this._currentState) {
                this._currentState.update(deltaTime);

                const fromCtor = this._currentState.constructor as __private.__types_globals__Constructor<State>;
                const possibleTransitions = this._transitions.get(fromCtor);
                if (possibleTransitions) {
                    for (const toCtor of possibleTransitions) {
                        if (this.canChangeState(fromCtor, toCtor)) {
                            const prevState = this._currentState;
                            prevState.onStateExit();
                            this._pendingTransition = { toCtor, prevState };
                            break;
                        }
                    }
                }
            }
        }

    }

    addState<T extends State>(stateConstructor: __private.__types_globals__Constructor<T>, isInitialState: boolean = false) {
        this._stateConstructors.add(stateConstructor);
        if (isInitialState) {
            this._initialStateConstructor = stateConstructor;
        }
        return this;
    }

    addTransition<T extends State>(from: __private.__types_globals__Constructor<T>, to: __private.__types_globals__Constructor<T>) {
        if (!this._transitions.has(from)) {
            this._transitions.set(from, new Set());
        }
        this._transitions.get(from).add(to);
        return this;
    }

    startSystem() {
        if (!this._initialStateConstructor) {
            throw new Error('Initial state not set. Please specify isInitialState=true when adding a state.');
        }
        this._currentState = new this._initialStateConstructor();
        this._currentState.onStateEnter();
    }

    canChangeState<T extends State>(from: __private.__types_globals__Constructor<T>, to: __private.__types_globals__Constructor<T>): boolean {
        return false;
    }
}


