import Player from './Player.js'
import Wall from './Wall.js'

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

    let wallUp = new Wall(this,this.game.config.width/2,0,this.game.config.width,50);
    let wallDown = new Wall(this,this.game.config.width/2,this.game.config.height,this.game.config.width,50);
    let wallLeft = new Wall(this,0,this.game.config.height/2,50,this.game.config.height);
    let wallRight = new Wall(this,this.game.config.width,this.game.config.height/2,50,this.game.config.height);

    this.uiText = this.add.text(25,25,"Quedan x colisiones y Z segundos").setFontSize(40).setColor('#000000');
  }

  update(time, delta) {    
  }
}