export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y,speed,keys,life){
        super(scene.matter.world,x,y,'player',0);
        scene.add.existing(this);
        this.setFixedRotation();
        this.setScale(3);

        this.up = scene.input.keyboard.addKey(keys.up);
        this.left = scene.input.keyboard.addKey(keys.left);
        this.right = scene.input.keyboard.addKey(keys.right);
    }
}