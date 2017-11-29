const MainScene = {
		sceneName_Main : "Main",
		
		scene_assets : {
				"sprites": {
						
						"http://bin.smwcentral.net/u/15240/cat_sprite.png": {
								tile: 240,
								tileh: 240,

								map: {
										cat_normal: [0, 0],
										cat_chatty: [0, 1]
								}
						}
				},

				"audio" : {
						"cat_chatter" : ["../../audio/cat_chat.wav"]
				}
		}
};

Crafty.defineScene(MainScene.sceneName_Main, function(menuData){
		Crafty.background("brown");
		
		Crafty.load(MainScene.scene_assets, function(){
				let cat = Crafty.e("2D, Canvas, cat_normal, Chatter")
						.attr({x: 10, y:10});

				cat.chatterSound = "cat_chatter";
		});
});
