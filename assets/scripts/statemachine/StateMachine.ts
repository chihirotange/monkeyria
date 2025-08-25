import { __private, _decorator, CCBoolean, Component, Node } from 'cc';
const { ccclass, property, type } = _decorator;

export abstract class State {
    system: StateMachine; // Add this line

    constructor(system: StateMachine) {
        this.system = system;
    }

    onStateEnter(prevState?: State): void { }
    onStateExit(nextState?: State): void { }
    onTransitionTo(nextState: State): void { }
    update(deltaTime: number): void { }
}

export type StateConstructor = new (...args: any[]) => State;

@ccclass('StateMachine')
export class StateMachine extends Component {
    protected _stateConstructors: Set<StateConstructor> = new Set();
    protected _currentState: State = null;
    protected _initialStateConstructor: StateConstructor = null;
    protected _transitions: Map<StateConstructor, Set<StateConstructor>> = new Map();
    protected _pendingTransition: {
        toCtor: StateConstructor,
        prevState: State
    } = null;

    // Blackboard for dynamic variables
    private _blackboard: Map<string, any> = new Map();

    /**
     * Set a value in the blackboard.
     * @param key The variable name.
     * @param value The value to set.
     */
    setVariable(key: string, value: any): void {
        this._blackboard.set(key, value);
    }

    /**
     * Get a value from the blackboard.
     * @param key The variable name.
     * @returns The value, or undefined if not set.
     */
    getVariable<T = any>(key: string): T | undefined {
        return this._blackboard.get(key);
    }

    /**
     * Remove a variable from the blackboard.
     * @param key The variable name.
     */
    removeVariable(key: string): void {
        this._blackboard.delete(key);
    }

    update(deltaTime: number) {
        if (this._pendingTransition) {
            const { toCtor, prevState } = this._pendingTransition;
            const nextState = new toCtor(this); // Pass system
            nextState.onStateEnter(prevState);
            prevState.onTransitionTo(nextState);
            this._currentState = nextState;
            this._pendingTransition = null;
        }
        else {
            if (this._currentState) {
                this._currentState.update(deltaTime);

                const fromCtor = this._currentState.constructor as StateConstructor;
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

    addState<T extends State>(stateConstructor: StateConstructor, isInitialState: boolean = false) {
        this._stateConstructors.add(stateConstructor);
        if (isInitialState) {
            this._initialStateConstructor = stateConstructor;
        }
        return this;
    }

    addTransition<T extends State>(from: StateConstructor, to: StateConstructor) {
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
        this._currentState = new this._initialStateConstructor(this); // Pass system
        this._currentState.onStateEnter();
    }

    canChangeState<T extends State>(from: StateConstructor, to: StateConstructor): boolean {
        return false;
    }
}


