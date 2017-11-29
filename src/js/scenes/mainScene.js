const MainScene = {
		sceneName_Main : "Main",
		
		scene_assets : {
				"sprites": {
						
						"../../cat_sprite.png": {
								tile: 140,
								tileh: 140,

								map: {
										cat_normal: [0, 0],
										cat_chatty: [0, 1]
								}
						}
				}
		}
};

Crafty.defineScene(MainScene.sceneName_Main, function(menuData){
		Crafty.background("#000");
		
		Crafty.load(MainScene.scene_assets, function(){
				var actual_size = Crafty.e("2D, Canvas, cat_normal")
						.attr({x: 10, y:10});
		});
});
