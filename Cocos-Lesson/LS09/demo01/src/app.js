
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //this.addChild(new cc.LayerColor(cc.color.WHITE));
        var sp1=new cc.Sprite(res.Spide_png);
        sp1.setPosition(size.width/2,size.height*0.7);
        this.addChild(sp1);

        cc.spriteFrameCache.addSpriteFrames(res.Enemy11_plist,res.Enemy11_png);
        var sp2 = new cc.Sprite("#11_L_at_00005.png");
        sp2.setPosition(size.width/2,size.height*0.3);
        this.addChild(sp2);

        var moveMenuItem = new cc.MenuItemFont("Move",function(){
            sp2.y += 15;
            if(cc.rectContainsPoint(sp1.getBoundingBox(),sp2.getPosition())){
                cc.log("碰到了");
            }
            // if(cc.rectContainsRect(sp1.getBoundingBox(),sp2.getBoundingBox())){
            //     cc.log("碰到了");
            // }

        },this);

        var menu = new cc.Menu(moveMenuItem);
        menu.y = size.height*0.1;
        this.addChild(menu);


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

