export default class Star extends Phaser.GameObjects.Sprite{
	constructor(scene,x,y,player){
		super(scene,x,y,'star');
		this.scene.add.existing(this);
		this.scene.physics.add.existing(this,true);
		this.scene.physics.add.collider(this,player);
		this.active = true;

		this.body.onCollide = true;
		this.scene.physics.world.on('collide',f=>{if(this.active){this.scene.points++; this.setVisible(false);}});
	}
}