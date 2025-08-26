import { _decorator, CCString, Component } from 'cc';
import { ItemType } from './ItemType';
const { ccclass, property, type } = _decorator;

@ccclass('ResourceDefinition')
export class ResourceDefinition {
    @type(ItemType)
    @property
    itemType: ItemType = ItemType.None;

    @type(CCString)
    @property
    displayName: string = '';
}

@ccclass('ResourceDictionary')
export class ResourceDictionary extends Component {
    private static _instance: ResourceDictionary | null = null;

    @property({ type: [ResourceDefinition] })
    resourceDefinitions: ResourceDefinition[] = [];

    onLoad() {
        if (ResourceDictionary._instance && ResourceDictionary._instance !== this) {
            this.node.destroy();
            return;
        }
        ResourceDictionary._instance = this;
    }

    static get instance(): ResourceDictionary {
        return ResourceDictionary._instance;
    }
}


