
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        cc.audioEngine.playMusic(res.Bg_mp3, true);

        var ls = cc.sys.localStorage;
        if (ls.getItem("isMusicOn") == null) {
            ls.setItem("isMusicOn", "YES");
            ls.setItem("isEffectOn", "YES");
        }

        var onItem = new cc.MenuItemImage(res.MusicOnNormal_png, res.MusicOnSelected_png, function () {
        }, this);
        var offItem = new cc.MenuItemImage(res.MusicOffNormal_png, res.MusicOffSelected_png, function () {
        }, this);
        var toggleMenuItem = new cc.MenuItemToggle(onItem, offItem, function () {
            if(toggleMenuItem.getSelectedIndex() == 0){
                ls.setItem("isMusicOn","YES");
                cc.audioEngine.playMusic(res.Bg_mp3, true);
            }else{
                // cc.audioEngine.pauseMusic();
                // cc.audioEngine.resumeMusic();
                ls.setItem("isMusicOn","NO");
                cc.audioEngine.stopMusic();
            }
        }, this);

        if (ls.getItem("isMusicOn") == "YES") {
            toggleMenuItem.setSelectedIndex(0);
            cc.audioEngine.playMusic(res.Bg_mp3, true);
        } else {
            toggleMenuItem.setSelectedIndex(1);
            cc.audioEngine.stopMusic();
        }

        var onItem2 = new cc.MenuItemImage(res.MusicOnNormal_png, res.MusicOnSelected_png, function () {
        }, this);

        var offItem2 = new cc.MenuItemImage(res.MusicOffNormal_png, res.MusicOffSelected_png, function () {
        }, this);

        var toggleMenuItem2 = new cc.MenuItemToggle(onItem2, offItem2, function () {
            ls.setItem("isEffectOn", toggleMenuItem2.getSelectedIndex() == 0 ? "YES" : "NO");
            if (ls.getItem("isEffectOn") == "YES") {
                cc.audioEngine.playEffect(res.Click_mp3);
            }
        }, this);


        if (ls.getItem("isEffectOn") == "YES") {
            toggleMenuItem2.setSelectedIndex(0);
        } else {
            toggleMenuItem2.setSelectedIndex(1);
        }

        //开始按钮
        var startMenuItem = new cc.MenuItemFont("进 入", function () {

            if (ls.getItem("isEffectOn") == "YES") {
                cc.audioEngine.playEffect(res.Click_mp3);
            }
            cc.director.runScene(new ASMainScene());
        }, this);
        startMenuItem.setFontSize(80);
        startMenuItem.setColor(cc.color.BLACK);
        startMenuItem.setFontName("Arial");

        //菜单
        startMenuItem.x = size.width/2;
        startMenuItem.y = size.height/2;



        toggleMenuItem.x = size.width*0.2;
        toggleMenuItem.y = size.height/5;

        toggleMenuItem2.x = size.width*0.8;
        toggleMenuItem2.y = size.height/5;

        var menu = new cc.Menu(toggleMenuItem,toggleMenuItem2);
        menu.x = 0;
        menu.y = 0;
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

