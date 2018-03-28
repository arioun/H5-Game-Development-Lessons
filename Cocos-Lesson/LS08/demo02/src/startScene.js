/*var startLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var layer = new cc.LayerColor(cc.color.BLUE);
        this.addChild(layer);

        var size=cc.winSize;
        var label = new cc.LabelTTF("这是第一个场景","50");
        label.x=size.width*0.5;
        label.y= size.height*0.7;
        this.addChild(label);
    }
});*/

var CustomLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var layer = new cc.LayerColor(cc.color.BLUE);
        this.addChild(layer);

        var size=cc.winSize;
        var label = new cc.LabelTTF("我是Customer","50");
        label.x=size.width*0.5;
        label.y= size.height*0.7;
        this.addChild(label);

        return true;
    }
});

var BgLayer=cc.Layer.extend({
    ctor:function () {
        this._super();

        var gdLayer1 = new cc.LayerGradient(cc.color.RED, new cc.Color(255,0,0,0),cc.p(0,-1));
        var gdLayer2 = new cc.LayerGradient(cc.color.RED, new cc.Color(255,0,0,0),cc.p(0,-1),
            [
                {p:0,color: cc.color.RED},
                {p:5,color:cc.color(0,0,0,0)},
                {p:1,color:cc.color.RED}
            ]);
    this.addChild(gdLayer2);
    }
});

var startScene=cc.Scene.extend({
    ctor:function () {
        this._super();
        var bglayer=new BgLayer();
        this.addChild(bglayer);
    }
});