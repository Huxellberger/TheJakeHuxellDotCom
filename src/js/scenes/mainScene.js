
const MainScene = {
    sceneName_Main : "Main",
    sceneColour_Main : "#000"
};

Crafty.defineScene(MainScene.sceneName_Main, function(){
    Crafty.background(MainScene.sceneColour_Main);
    Crafty.e("2D, Canvas, Color, Chatter, Linkable")
        .color("#FFFFFF");
});
