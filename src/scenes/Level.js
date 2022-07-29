
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		const player = new MatterPlayer(this, 746, 369);
		//const player = this.matter.add.sprite(0, 0,"player");

		this.player = player;

		this.player.x=window.innerWidth/2
		this.player.y=0

		var color = 0x206ab6;
    	var thickness = 4;
   		var alpha = 1;
		var terrain = this.add.graphics();
		terrain.fillStyle(color,alpha);
		terrain.lineStyle(thickness, color, alpha);
		terrain.beginPath();
		terrain.moveTo(0, 0);
		terrain.lineTo(window.innerWidth/2-130	, 0);
		terrain.lineTo(window.innerWidth/2-100	, 20);
		terrain.lineTo(window.innerWidth/2-100	, 30);
		terrain.lineTo(window.innerWidth/2-100	, window.innerHeight);
		terrain.lineTo(0, window.innerHeight);


		terrain.closePath();
		terrain.fillPath();
		terrain.strokePath();

		terrain.generateTexture('leftTerrain');
		//this.newTerrain = this.matter.add.sprite(0, 0, 'leftTerrain');
		//this.newTerrain.setOrigin(0,0);
		//console.log(this.newTerrain);
		terrain.destroy();

		this.zoomRatio = 1;
		this.initCamera();
		this.initColliders();
	}


	initCamera() {

		const cam = this.cameras.main;

		cam.setBounds(0, 0, window.innerWidth,  window.innerHeight);

		cam.setRoundPixels(true);
		cam.zoom=this.zoomRatio;

		cam.startFollow(this.player, true, 0, 0);


		cam.setLerp(0.1);


	}

	initColliders(){

	}

	collidingTerrain(){

		console.log("im colliding")
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
