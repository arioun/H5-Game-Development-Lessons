
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var tileMap = new cc.TMXTiledMap(res.Tmx_tmx);
        this.addChild(tileMap);

        var mapSize = tileMap.getMapSize();
        var tileSize = tileMap.getTileSize();

        var tileMapProperties = tileMap.getProperties();
        for (var i in tileMapProperties) {
        }

        var tile1Properties = tileMap.getPropertiesForGID(1);
        for (var i in tile1Properties) {
            //cc.log("GID1的属性"+i +":"+ tile1Properties[i]);
        }

        var bgLayer = tileMap.getLayer("LayerBG");
        //cc.log("LayerSize:"+bgLayer.getLayerSize().width+"_"+bgLayer.getLayerSize().height);//瓦片的个数
        //cc.log("MapTileSize:"+bgLayer.getMapTileSize().width+"_"+bgLayer.getMapTileSize().height);//单个瓦片的像素数

        var tiles = bgLayer.getTiles();//Tile数组
        var tileAt = bgLayer.getTileAt(cc.p(1,1));//tileMap坐标系下得到对应的精灵
        tileAt.setColor(cc.color.BLUE);
        var tileGIDAt = bgLayer.getTileGIDAt(cc.p(6,5));//这里指的是TileMap坐标系
        //cc.log("tileGID = "+tileGIDAt);

        var positionAt = bgLayer.getPositionAt(1,1);//瓦片坐标系－》像素的坐标系转换，x轴一样，y轴反向并差一片，重要
        //cc.log("positionAt:"+positionAt.x+"_"+(positionAt.y+tileSize.width));

        //cc.log(bgLayer.getProperty("type"));
        //cc.log(bgLayer.getProperties().type);

        for(var i = 1;i<2;i++){
            for(var j = 1;j<2;j++){
                var sprite = bgLayer.getTileAt(cc.p(i,tileMap.getMapSize().height-j-1));
                sprite.setColor(cc.color.RED);
            }
        }

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

