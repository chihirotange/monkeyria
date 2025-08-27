import { _decorator, Component, Node, director, EventTarget, game, Game, PhysicsSystem2D, EPhysics2DDrawFlags } from 'cc';
import { EDITOR } from 'cc/env';
const { ccclass, property, executionOrder } = _decorator;

// game.on(Game.EVENT_GAME_INITED, () => {
// 	PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Shape;
// })

@ccclass('GameManager')
@executionOrder(-10)
export class GameManager extends Component {
	private static _instance: GameManager | null = null;
	private static _eventTarget: EventTarget = new EventTarget();

	@property({ tooltip: 'Player money' })
	defaultMoney: number = 0;

	private _money: number = 0;

	// Store task locations with tags/types
	private _taskLocations: Map<Node, string[]> = new Map<Node, string[]>();

	get money(): number {
		return this._money;
	}
	set money(v: number) {
		this._money = v;
		GameManager._eventTarget.emit('money-changed', this.money);
	}

	onLoad() {
		if (GameManager._instance && GameManager._instance !== this) {
			this.node.destroy();
			return;
		}
		GameManager._instance = this;
		if (!this.node.isValid) return;
		director.addPersistRootNode(this.node);
	}

	protected start(): void {
		this.money = this.defaultMoney;
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

	static get events(): EventTarget {
		return GameManager._eventTarget;
	}

	addTaskLocation(node: Node, types: string[]) {
		this._taskLocations.set(node, types);
	}

	findTaskLocationsByType(type: string): Node[] {
		return Array.from(this._taskLocations.entries())
			.filter(([_, types]) => types.indexOf(type) > -1)
			.map(([node, _]) => node);
	}

	findTaskLocationsWithAllTypes(types: string[]): Node[] {
		return Array.from(this._taskLocations.entries())
			.filter(([_, nodeTypes]) => types.every(type => nodeTypes.indexOf(type) > -1))
			.map(([node, _]) => node);
	}

	findTaskLocationsWithAnyTypes(types: string[]): Node[] {
		return Array.from(this._taskLocations.entries())
			.filter(([_, nodeTypes]) => types.some(type => nodeTypes.indexOf(type) > -1))
			.map(([node, _]) => node);
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
