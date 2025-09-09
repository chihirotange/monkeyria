import { _decorator, CCFloat, CCInteger, Component, instantiate, macro, Node, Prefab, UITransform, Vec2 } from 'cc';
const { ccclass, property, type } = _decorator;

@ccclass('CustomerManager')
export class CustomerManager extends Component {

    @type(Prefab)
    customerPrefab: Prefab = null;
    
    @type(Node)
    spawnTransform: Node = null;

    @type(Node)
    characterContainer: Node = null;

    @type(CCFloat)
    spawnInterval: number = 3;

    @type(CCInteger)
    maxSpawnCount: number = 5;

    private _spawnedCount = 0;

    start() {
        this.schedule(this.spawnCustomer, this.spawnInterval, macro.REPEAT_FOREVER);
    }

    update(deltaTime: number) {
        
    }

    spawnCustomer() {
        if (this.customerPrefab && this.spawnTransform) {
            let customer = instantiate(this.customerPrefab);
            customer.parent = this.characterContainer;
            customer.setWorldPosition(this.spawnTransform.getWorldPosition());
            this._spawnedCount++;
        }

        if (this._spawnedCount >= this.maxSpawnCount) {
            this.unschedule(this.spawnCustomer);
        }
    }
}


