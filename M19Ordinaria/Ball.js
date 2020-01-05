export default class Ball extends Phaser.GameObjects.Ellipse{
    constructor(scene,x,y,diameter,maxSpeed,divisions){
        super(scene,x,y,diameter,diameter,"0x00FF00");
        scene.add.existing(this);
        this.radius = diameter/2;
        this.divisions = divisions;
        let collider = scene.matter.add.circle(x,y,this.radius);
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