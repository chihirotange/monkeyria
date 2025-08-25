import { State } from '../../statemachine/StateMachine';

export class IdleState extends State {
    private _idleDuration: number = 0;

    get idleDuration(): number { return this._idleDuration; }
    
    onStateEnter(prevState?: State): void {
        this._idleDuration = Math.random() * 2 + 3;
    }

    update(deltaTime: number): void {
        this._idleDuration -= deltaTime;
    }
}
