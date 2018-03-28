
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var layer1=new cc.LayerColor(cc.color.RED,200,200);
        layer1.ignoreAnchor=false;
        layer1.setAnchorPoint(1,1);
        layer1.setPosition(size.width-50,size.height-50);
        this.addChild(layer1);

        var layer2=new cc.LayerColor(cc.color.YELLOW,200,200);
        layer2.ignoreAnchor=false;
        layer2.setAnchorPoint(1,0);
        layer2.setPosition(size.width-50,50);
        //layer2.scale=0.5;
        this.addChild(layer2);

        var layer3=new cc.LayerColor(cc.color.BLUE,200,200);
        layer3.ignoreAnchor=false;

        var point=layer1.convertToNodeSpaceAR(layer3.getPosition());
        var point2=layer1.convertToWorldSpaceAR(layer3.getPosition());
        console.log(point);
        console.log(point2);
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

