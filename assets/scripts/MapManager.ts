import { _decorator, assetManager, Component, ImageAsset, JsonAsset, Node, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property, type } = _decorator;

@ccclass('MapManager')
export class MapManager extends Component {
    @type(Sprite)
    BG: Sprite = null;
    @type(Sprite)
    BG_top: Sprite = null;

    start() {
        // assetManager.loadBundle('resources', (loadBundleError, bundle) => {
        //     if (loadBundleError) {
        //         return;
        //     }
        // })
        resources.load('Terrain/spriteFrame', SpriteFrame, (err, data) => {
            if (err) {
                return;
            }
            this.BG.spriteFrame = data;
        });
        resources.load('Terrain_top/spriteFrame', SpriteFrame, (err, data) => {
            if (err) {
                return;
            }
            this.BG_top.spriteFrame = data;
        });
        resources.load('data', JsonAsset, (err, jsonAsset) => {
            if (err) {
                return;
            }
            this.onMapDataLoaded(jsonAsset.json);
        });
    }
    onMapDataLoaded(json: Record<string, any>) {
        const identifier = json.identifier;
        const width = json.width;
        const height = json.height;
        const bgColor = json.bgColor;
        
        const entities = json.entities;
        for (const entityType in entities) {
            if (entities.hasOwnProperty(entityType)) {
                const entityArray = entities[entityType];
                entityArray.forEach((entity: any) => {
                    console.log(`Entity type: ${entityType}, id: ${entity.id}, x: ${entity.x}, y: ${entity.y}`);
                    // You can access other fields as needed
                });
            }
        }
    }
}


