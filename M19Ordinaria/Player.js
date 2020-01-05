export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y,speed){
        super(scene.matter.world,x,y,'player');
        scene.add.existing(this);
        this.setSensor(true);
        this.setFixedRotation(true);
        this.setBounce(0);
        this.speed = speed;

        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    preUpdate(){
        /*let horizontalMovement = (this.cursors.left.isDown || this.cursors.right.isDown);
        let verticalMovement = (this.cursors.up.isDown || this.cursors.down.isDown);

        if(horizontalMovement){
            horizontalMovement = (this.cursors.left.isDown) ? -this.speed : this.speed;
            if(verticalMovement)
                {verticalMovement = (this.cursors.up.isDown) ? -this.speed : this.speed;
                this.setVelocity(Math.cos(Math.PI/4)*horizontalMovement,Math.cos(Math.PI/4)*verticalMovement);}
            else{
                this.setVelocityX(horizontalMovement);
            }
        }else if(verticalMovement){
            verticalMovement = (this.cursors.up.isDown) ? -this.speed : this.speed;
            this.setVelocityY(verticalMovement);
        }else
            {this.setVelocity(0,0);}*/

        let velX = 0, velY = 0;
        if(this.cursors.left.isDown) velX = -this.speed;
        else if (this.cursors.right.isDown) velX = this.speed;
        else velX = 0;
        
        if(this.cursors.up.isDown) velY = -this.speed;
        else if (this.cursors.down.isDown) velY = this.speed;
        else velY = 0;

        if(velY != 0)
            {this.setVelocity(velX*Math.cos(Math.PI/4),velY*Math.cos(Math.PI/4));}
        else
            {this.setVelocity(velX,velY);}
    }
}