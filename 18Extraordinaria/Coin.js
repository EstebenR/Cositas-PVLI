export default class Coin extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,player){
        super(scene,x,y,'coin');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this,true);
        this.scene.physics.add.collider(this,player,f=>{this.scene.givePoint(this);});
    }
}