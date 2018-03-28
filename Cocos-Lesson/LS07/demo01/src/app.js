
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        num:0;
        var labelTTF=new cc.LabelTTF("玩家1："+this.num,"",64);
        labelTTF.x=size.width/4;
        labelTTF.y=size.height-50;
        this.addChild(labelTTF);

        labelTTF.setFontSize(50);

        this.label=labelTTF;
        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0);
        return true;
    },
    myTimer:function (dt) {
        this.num+=1;
        this.label.setString("玩家:"+parseInt(this.num));

    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

