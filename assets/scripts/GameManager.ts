import { _decorator, Component, Node, director, EventTarget } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
	private static _instance: GameManager | null = null;

	// Delegate for broadcasting events
	private static _eventTarget: EventTarget = new EventTarget();

	@property({ tooltip: 'Player money' })
	get money(): number {
		return this._money;
	}
	private set money(v: number) {
		this._money = v;
		GameManager._eventTarget.emit('money-changed', this.money);
	}
	private _money: number = 0;

	onLoad() {
		if (GameManager._instance && GameManager._instance !== this) {
			// Prevent duplicate singletons
			this.node.destroy();
			return;
		}
		GameManager._instance = this;
		// Optionally make this node persistent
		if (!this.node.isValid) return;
		director.addPersistRootNode(this.node);
	}

	static get instance(): GameManager {
		return GameManager._instance;
	}

	addMoney(amount: number) {
		this.money += amount;
	}

	spendMoney(amount: number): boolean {
		if (this.money >= amount) {
			this.money -= amount;
			return true;
		}
		return false;
	}

	resetMoney() {
		this.money = 0;
	}

	// Delegate accessor for listeners
	static get events(): EventTarget {
		return GameManager._eventTarget;
	}
}

/*
@startuml
' Note: Access the GameManager singleton via GameManager.instance

class GameManager {
	+addMoney(amount: number): void
	+spendMoney(amount: number): boolean
	+resetMoney(): void
	--
	+money: number
	' Singleton accessor
	{static} +instance: GameManager
}

note top of GameManager
Access the singleton:
GameManager.instance.addMoney(100)
GameManager.instance.spendMoney(50)
GameManager.instance.resetMoney()
end note

GameManager : +addMoney(amount) - Increase player money by amount
GameManager : +spendMoney(amount) - Decrease money if enough, return true/false
GameManager : +resetMoney() - Set money to zero

@enduml
*/
