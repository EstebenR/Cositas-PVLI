export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y,speed){
        super(scene.matter.world,x,y,'player',0);
        scene.add.existing(this);
        this.setScale(3);
        this.setFixedRotation();
        this.speed = speed;

        this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    preUpdate(t,dt){
        if(this.cursors.left.isDown){
            this.setVelocityX(-this.speed);
        }else if(this.cursors.right.isDown){
            this.setVelocityX(this.speed);
        }else
        {this.setVelocityX(0);}

        if(this.cursors.up.isDown)
        ;
    }
}