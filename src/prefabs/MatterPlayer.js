
// You can write more code here

/* START OF COMPILED CODE */

class MatterPlayer extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "player", frame);

		/* START-USER-CTR-CODE */
      
		this.createEvent =	this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.create, this);
		this.createEvent =	this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		
        this.player=this.scene.matter.add.sprite(0,0,this.texture);
	}

	update(){

        this.player.x=this.scene.input.x;

        this.player.y=this.scene.input.y;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
