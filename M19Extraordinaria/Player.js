export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y){
        super(scene.matter.world,x,y,'player',0);
        scene.add.existing(this);
        this.setScale(3);
    }
}