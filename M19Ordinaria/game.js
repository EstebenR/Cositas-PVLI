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


    this.player = new Player(this,700,400,10);

    let ball = new Ball(this,300,300,100,10,0);

    this.matter.world.on('collisionstart', 
      (evento, cuerpo1, cuerpo2) => {
      if(cuerpo1 == this.player.body || cuerpo2 == this.player.body && (cuerpo1.type == "Ellipse" || cuerpo2.type == "Ellipse")){
        let collidedBall = (cuerpo1 == this.player.body) ? cuerpo2 : cuerpo1;
        this.ballCollided(collidedBall.gameObject);
      }
      },this);

    //UI
    this.collisions = 15;
    this.timeToPlay = 30;//secs
    this.gameRunning = true;

    let string = "Quedan " + this.collisions + " colisiones y " + this.timeToPlay + " segundos";
    this.uiText = this.add.text(25,25,string).setFontSize(40).setColor('#000000');

    this.timer = this.time.addEvent({
      delay: 1000,                // ms
      callback: this.updateUI,
      args: [true],
      callbackScope: this,
      loop: true
  });

    this.spacebar = this.input.keyboard.addKey('SPACE');
  }

  updateUI(secondPassed){
    if(secondPassed)this.timeToPlay--;
    let string = "Quedan " + this.collisions + " colisiones y " + this.timeToPlay + " segundos";   
    this.uiText.setText(string)
  }

  update(time, delta) {    
    if(this.timeToPlay == 0 || this.collisions == 0){
      this.matter.world.pause();
      if(this.timeToPlay == 0)
        {this.add.text(500,400,"HAS PERDIDO").setColor('#FF0000').setFontSize(60);}
      else
        {this.add.text(500,400,"HAS GANADO").setColor('#00FF00').setFontSize(60);}
      this.add.text(350,500,"Pulsa espacio para reiniciar").setColor('#000000').setFontSize(40);
      this.gameRunning = false;
    }

    if(this.spacebar.isDown && !this.gameRunning)
      this.scene.restart();
  }

  ballCollided(collidedBall){
    this.collisions--;
    this.updateUI(false);
    if(collidedBall.divisions < 3){
      new Ball(this,collidedBall.x,collidedBall.y,collidedBall.radius,10,collidedBall.divisions+1);
      new Ball(this,collidedBall.x,collidedBall.y,collidedBall.radius,10,collidedBall.divisions+1);
    }
    collidedBall.body.destroy();
    collidedBall.destroy();
  }
}