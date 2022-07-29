
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: window.innerWidth,
		height: window.innerHeight,
		type: Phaser.AUTO,
		pixelArt: true,
        backgroundColor: "#242424",
		physics: {
			default: "matter",
			matter: {  
				gravity: {
                y: 0
            	},
				debug: true
			}		
		},
		fps: {
			target: 60,
			min: 30,
			forceSetTimeOut: false
		},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}