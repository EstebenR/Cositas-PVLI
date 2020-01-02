export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,speed,keys,lifepoints){
        super(scene,x,y,'player',0);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.collideWorldBounds = true;
        this.setScale(3);

        this.bouncing = false;
        this.speed = speed;
        this.life = lifepoints;

        this.left = this.scene.input.keyboard.addKey(keys[0]);
        this.right = this.scene.input.keyboard.addKey(keys[1]);
        this.up = this.scene.input.keyboard.addKey(keys[2]);
    }

    preUpdate(t,dt){
        if(!this.bouncing){
            if(this.left.isDown) {this.body.setVelocityX(-this.speed);}
            else if(this.right.isDown) {this.body.setVelocityX(this.speed);}
            else {this.body.setVelocityX(0);}
        }
        
        if(this.up.isDown && (this.body.touching.down || this.body.onFloor())) {this.body.setVelocityY(-this.speed);}
    }

    bounce(force){
        this.body.setVelocity(force.x,force.y);
        if(force.x != 0){
            this.bouncing = true;
            var timer = this.scene.time.delayedCall(200,f=>{this.bouncing = false;} );
        }
    }
}