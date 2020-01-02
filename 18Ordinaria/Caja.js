export default class Caja extends Phaser.GameObjects.Rectangle{
    constructor(scene,x,y,size,speed,direction,cajas){
        super(scene,x,y,size,size,'0xFF00FF');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.collideWorldBounds = true;
        this.speedX = Math.sin(direction*Math.PI/180)*speed;
        this.speedY = Math.cos(direction*Math.PI/180)*speed;

        this.body.setVelocity(this.speedX,this.speedY);

        this.body.setImmovable();
        this.setCollisions(cajas);
    }

    preUpdate(t,dt){
        if(this.body.onFloor() || this.body.onCeiling()){this.speedY = -this.speedY; this.body.setVelocityY(this.speedY);}
        else if(this.body.onWall()) {this.speedX = -this.speedX; this.body.setVelocityX(this.speedX)};
    }

    setCollisions(cajas){
        for(let i = 0; i < cajas.length-1; i++){
            this.scene.physics.add.collider(this,cajas[i],(obj1,obj2)=>{
                obj1.chocado();
                obj2.chocado();
            })
        }
    }

    chocado(){
        this.angle = Math.floor(Math.random()*360-180);
        let speed = Math.floor(Math.random()*500+100);
        let direction = Math.floor(Math.random()*360);
        this.speedX = Math.sin(direction*Math.PI/180)*speed;
        this.speedY = Math.cos(direction*Math.PI/180)*speed;
        
        this.body.setVelocity(this.speedX,this.speedY);
    }
    
    addSpeed(x,y){
        this.speedX += x;
        this.speedY += y;
        this.body.setVelocity(this.speedX,this.speedY);
    }
}