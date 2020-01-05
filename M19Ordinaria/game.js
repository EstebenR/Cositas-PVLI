import Player from './Player.js'
import Wall from './Wall.js'
import Ball from './Ball.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('player','Player.png');
    this.load.image('wall','Platform.png');
  }

  create() {
    this.cameras.main.setBackgroundColor('#FFFFFF');
    this.matter.world.setBounds();

    let wallUp = new Wall(this,this.game.config.width/2,0,this.game.config.width,50);
    let wallDown = new Wall(this,this.game.config.width/2,this.game.config.height,this.game.config.width,50);
    let wallLeft = new Wall(this,0,this.game.config.height/2,50,this.game.config.height);
    let wallRight = new Wall(this,this.game.config.width,this.game.config.height/2,50,this.game.config.height);

    this.uiText = this.add.text(25,25,"Quedan x colisiones y Z segundos").setFontSize(40).setColor('#000000');

    this.player = new Player(this,700,400,10);

    let ball = new Ball(this,300,300,100,10,0);

    this.matter.world.on('collisionstart', 
      (evento, cuerpo1, cuerpo2) => {
      if(cuerpo1 == this.player.body || cuerpo2 == this.player.body && (cuerpo1.type == "Ellipse" || cuerpo2.type == "Ellipse")){
        let collidedBall = (cuerpo1 == this.player.body) ? cuerpo2 : cuerpo1;
        this.ballCollided(collidedBall.gameObject);
      }
      },this);
  }

  update(time, delta) {    
  }

  ballCollided(collidedBall){
    console.log(collidedBall);
    if(collidedBall.divisions < 3){
      new Ball(this,collidedBall.x,collidedBall.y,collidedBall.radius,10,collidedBall.divisions+1);
      new Ball(this,collidedBall.x,collidedBall.y,collidedBall.radius,10,collidedBall.divisions+1);
    }
    collidedBall.body.destroy();
    collidedBall.destroy();
  }
}