
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


		var color = 0x206ab6;
    	var thickness = 4;
   		var alpha = 1;
		this.terrain = this.add.graphics();
		this.terrain.fillStyle(color,alpha);
		this.terrain.lineStyle(thickness, color, alpha);
		this.terrain.beginPath();
		this.terrain.moveTo(0, 0);
		this.terrain.lineTo(window.innerWidth/2	, 0);
		this.terrain.lineTo(window.innerWidth/2	, 20);
		this.terrain.lineTo(window.innerWidth/2-10	, 30);
		this.terrain.lineTo(window.innerWidth/2-10	, window.innerHeight);
		this.terrain.lineTo(0, window.innerHeight);

		this.terrain.closePath();
		this.terrain.fillPath();
		this.terrain.strokePath();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
