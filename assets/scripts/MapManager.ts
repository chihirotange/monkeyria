import { _decorator, assetManager, Component, ImageAsset, Node, resources, Sprite, SpriteFrame } from 'cc';
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
    }

}


