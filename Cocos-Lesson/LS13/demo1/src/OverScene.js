var OverLayer = cc.Layer.extend({

    ctor:function () {
        this._super();

        var size = cc.winSize;
        //添加背景
        var bg = new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.setPosition(size.width*0.5,size.height*0.5);
        this.addChild(bg);
        //添加结束框
        var kuang = new cc.Sprite(res.JieShuKuang);
        kuang.x=size.width*0.5;
        kuang.y=size.height*0.5;
        this.addChild(kuang);
        //读取显示分数
        var scoreLabel = new cc.LabelTTF("","",size.width/12);
        scoreLabel.x=size.width*0.46;
        scoreLabel.y=size.width*1.02;
        scoreLabel.setFontFillColor(cc.color.YELLOW);
        kuang.addChild(scoreLabel);

        var score = cc.sys.localStorage.getItem("currentScore");
        scoreLabel.setString(score);
        scoreLabel.scale=0;
        var scaleAction  = cc.scaleTo(0.5,1.0).easing((cc.easeElasticOut(0.5)));
        var seq = cc.sequence(cc.delayTime(0.2),scaleAction);
        scoreLabel.runAction(seq);


        return true;
    }
});

var OverScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});