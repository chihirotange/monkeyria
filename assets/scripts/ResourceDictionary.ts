import { _decorator, CCString, Component, SpriteFrame } from 'cc';
import { ItemType } from './ItemType';
const { ccclass, property, type } = _decorator;

@ccclass('ResourceDefinition')
export class ResourceDefinition {
    @type(ItemType)
    @property
    itemType: ItemType = ItemType.None;

    @property
    displayName: string = '';

    @type([SpriteFrame])
    spriteFrames: SpriteFrame[] = [];

    @type(SpriteFrame)
    soilSpriteFrame: SpriteFrame = null;
    
    @type(SpriteFrame)
    readyToHarvestSoilSpriteFrame: SpriteFrame = null;
}

@ccclass('ResourceDictionary')
export class ResourceDictionary extends Component {
    private static _instance: ResourceDictionary | null = null;
    
    @property({ type: [ResourceDefinition] })
    resourceDefinitions: ResourceDefinition[] = [];
    
    @type(SpriteFrame)
    defaultSoilSpriteFrame: SpriteFrame = null;
    
    @type(SpriteFrame)
    defaultReadyToHarvestSoilSpriteFrame: SpriteFrame = null;

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

    findDefintion(type: ItemType): ResourceDefinition | undefined {
        return this.resourceDefinitions.find((def) => def.itemType === type);
    }
}


