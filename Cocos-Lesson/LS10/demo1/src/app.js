
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    ctor:function () {
        this._super();
        var size = cc.winSize;
       for (var i=0;i<3;i++){
           this.sprites[i]=new cc.Sprite('res/sprite'+(i+1)+'.png');
           this.sprites[i].x=size.width*0.2;
           this.sprites[i].y=size.height*(0.3*i+0.2);
           this.addChild(this.sprites[i]);
       }
        /*//即时动作
        this.sprites[0].runAction(cc.place(this.sprites[0].x+50,this.sprites[0].y));

        this.sprites[1].runAction(cc.flipX(true));
        this.sprites[1].runAction(cc.flipY(true));

        this.sprites[2].runAction(cc.hide());

        this.sprites[2].runAction(cc.callFunc(function(){
            this.sprites[2].runAction(cc.show());
            cc.log('调用');
        },this));*/
        //间隔动作
        this.sprites[0].runAction(cc.moveBy(10.0,200,0));

        //this.sprites[1].runAction(cc.jumpBy(10.0,100,0,100,2));
        this.sprites[1].runAction(cc.jumpTo(10.0,100,100,100,2));

        this.sprites[2].runAction(cc.rotateBy(10.0,90,0));

        var node_1_MenuItem,node_2_MenuItem;
        var isPaused = false;
        node_1_MenuItem = new cc.MenuItemFont("Node1",function () {
            if(!isPaused){
                this.sprites[0].pause();
                isPaused=!isPaused;
                cc.log("pause sprites[0]");
            }else{
                this.sprites[0].resume();
                isPaused=!isPaused;
                cc.log("resume sprites[0]");
            }
        },this);
        node_2_MenuItem = new cc.MenuItemFont("Node2",function () {
            // this.sprites[1].stopAction();//需要传对应的action对象
            // this.sprites[1].stopActinByTag(tag);
            this.sprites[1].stopAllActions();
        },this);

        var menu = new cc.Menu(node_1_MenuItem,node_2_MenuItem);
        menu.y = size.height*0.5;
        menu.alignItemsHorizontallyWithPadding(50);
        this.addChild(menu);

        var timer = new cc.ProgressTimer(this.sprites[1]);
        timer.x=this.sprites[1].x+100;
        timer.y=this.sprites[1].y;
        this.addChild(timer);
        timer.type=cc.ProgressTimer.TYPE_BAR;
        timer.midPoint=cc.p(0,0);
        timer.barChangeRate=cc.p(0,1);
        timer.runAction(cc.progressTo(20,0,100));

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

