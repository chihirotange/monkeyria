import { _decorator, Asset, assetManager, CCFloat, CCInteger, CCString, Component, ImageAsset, instantiate, JsonAsset, Node, Prefab, resources, Sprite, SpriteFrame, Vec2, Vec3 } from 'cc';
import { parseLdtkProject } from './ldtkType';
const { ccclass, property, type } = _decorator;

@ccclass('PrefabMappingDef')
export class PrefabMappingDef {
    @property
    type: string = '';

    @type(Prefab)
    prefab: Prefab = null;
}

@ccclass('MapManager')
export class MapManager extends Component {
    @type(Sprite)
    BG: Sprite = null;
    @type(Sprite)
    BG_top: Sprite = null;

    @type(Node)
    gameObjectsLayer: Node = null;

    @type(CCFloat)
    spriteScaleFactor: number = 4;

    @property({
        type: [PrefabMappingDef]
    })
    prefabMappingDefs: PrefabMappingDef[] = [];

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
            resources.load('monkeyria', Asset, (err, asset) => {
            if (err) {
                return;
            }
            this.onMapDataLoaded(asset.nativeAsset);
        });
        });
        resources.load('Terrain_top/spriteFrame', SpriteFrame, (err, data) => {
            if (err) {
                return;
            }
            this.BG_top.spriteFrame = data;
        });
        
    }
    onMapDataLoaded(jsonString: string) {
        let ldtk = parseLdtkProject(jsonString);

        let mapAnchor = new Vec3();
        mapAnchor = mapAnchor.add(this.BG.node.getWorldPosition());
        const size = this.BG.spriteFrame.originalSize;
        const scale = this.BG.node.getWorldScale();
        const width = size.width * scale.x;
        const height = size.height * scale.y;
        mapAnchor = mapAnchor.add(new Vec3(-width / 2, height / 2, 0));

        if (ldtk.levels.length > 0) {
            let level = ldtk.levels[0];
            let entitiesLayer = level.layerInstances.find((layer) => {
                return layer.__type === 'Entities';
            });
            if (entitiesLayer) {
                entitiesLayer.entityInstances.forEach((entityInstance) => {
                    let entityType = entityInstance.fieldInstances.find((field) => {
                        return field.__identifier === 'EntityType';
                    });

                    if (entityType != undefined) {
                        let foundDef = this.prefabMappingDefs.find((def) => {
                            return def.type === entityType.__value;
                        });
                        if (foundDef) {
                            let entity = instantiate(foundDef.prefab);
                            entity.parent = this.gameObjectsLayer;
                            // get top-left position of this.BG
                            entity.setWorldPosition(new Vec3(entityInstance.__worldX * this.spriteScaleFactor, entityInstance.__worldY * this.spriteScaleFactor * -1, 0).add(mapAnchor));
                        }
                        else {
                            console.log('No mapping for type ' + entityInstance.__identifier);
                        }
                    }
                });
            }
        }
    }
}
