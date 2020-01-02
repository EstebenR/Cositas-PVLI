export default class Player extends Phaser.GameObjects.Sprite{
	constructor(scene,x,y){
		super(scene,x,y,'player');
		this.scene.add.existing(this);
		this.scene.physics.add.existing(this);
		this.body.setCollideWorldBounds(true);

			this.speed = 200;
		this.cursors = this.scene.input.keyboard.createCursorKeys();
	}

	preUpdate(t,dt){
		if(this.cursors.left.isDown)
			{this.body.setVelocityX(-this.speed);}
		else if(this.cursors.right.isDown)
			{this.body.setVelocityX(this.speed);}
		else
			{this.body.setVelocityX(0);}

		if(this.cursors.up.isDown && this.body.onFloor())
			{this.body.setVelocityY(-this.speed*2-30)};
	}
}