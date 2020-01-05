export default class Ball extends Phaser.GameObjects.Ellipse{
    constructor(scene,x,y,diameter,maxSpeed){
        super(scene,x,y,diameter,diameter,"0x00FF00");
        scene.add.existing(this);
        let collider = scene.matter.add.circle(x,y,diameter/2);
        scene.matter.add.gameObject(this,collider);

        this.setFriction(0,0,0);
        this.setBounce(1);
        this.randomizeSpeed(maxSpeed);
    }

    randomizeSpeed(maxSpeed){
        let velX = Math.floor(Math.random()*maxSpeed);
        let velY = Math.floor(Math.random()*maxSpeed);

        this.setVelocity(velX,velY);
    }
}