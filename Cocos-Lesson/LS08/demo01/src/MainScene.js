var MainLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var layer=new cc.LayerColor(cc.color.RED);
        this.addChild(layer);
        var size=cc.winSize;
        var menuItem=new cc.MenuItemFont("跳转到第一个场景", function(){
            //cc.director.runScene(new MainScene());
            cc.director.runScene(new cc.TransitionMoveInL(2,new StartScene()));
        },this);
        menuItem.setFontSize(50);
        var menu=new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x=size.width*0.5;
        menuItem.y=size.height*0.3;
        this.addChild(menu);
    }

});
var MainScene=cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer=new MainLayer();
        this.addChild(layer);
    }
});