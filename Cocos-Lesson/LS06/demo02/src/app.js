
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var layer1=new cc.LayerColor(cc.color.RED,200,200);
        layer1.ignoreAnchor=false;
        layer1.x=size.width/2;
        layer1.y=size.height/2;
        this.addChild(layer1);

        var layer2=new cc.LayerColor(cc.color.YELLOW,200,200);
        layer2.ignoreAnchor=false;
        layer2.x=size.width/4;
        layer2.y=size.height/2;
        this.addChild(layer2);

        var layer3=new cc.LayerColor(cc.color.BLUE,200,200);
        layer3.ignoreAnchor=false;
        layer3.x=size.width*3/4;
        layer3.y=size.height/2;
        this.addChild(layer3);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

