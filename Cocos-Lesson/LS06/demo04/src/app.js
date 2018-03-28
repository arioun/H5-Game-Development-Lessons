
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var redLayer=new cc.LayerColor(cc.color.RED,100,100);
        redLayer.ignoreAnchor=false;
        redLayer.setAnchorPoint(0.5,0.5);
        redLayer.x=size.width/2;
        this.redLayer=redLayer;
        this.addChild(this.redLayer);

        //this.scheduleUpdate();
        this.schedule(this.myCallBack,0.2,cc.REPEAT_FOREVER,0);
        return true;
    },
    update:function (dt) {
        cc.log(dt);
        this.redLayer.x+=1;

    },
    myCallBack:function(dt){
        this.redLayer.y-=this.speed;
        if(this.redLayer.y<0){
            //this.unschedule(this.myCallBack);
            this.speed=-12.596;
        }else{
            this.speed+=0.2;
        }
    }

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

