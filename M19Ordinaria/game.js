import Player from './Player.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('player','Player.png');
  }

  create() {
    this.cameras.main.setBackgroundColor('#FFFFFF');

    let wallUp = this.add.rectangle(this.game.config.width/2,0,this.game.config.width,50,'0x0000FF');
    let wallDown = this.add.rectangle(this.game.config.width/2,this.game.config.height,this.game.config.width,50,'0x0000FF');
    let wallLeft = this.add.rectangle(0,this.game.config.height/2,50,this.game.config.height,'0x0000FF');
    let wallRight = this.add.rectangle(this.game.config.width,this.game.config.height/2,50,this.game.config.height,'0x0000FF');

    this.uiText = this.add.text(25,25,"Quedan x colisiones y Z segundos").setFontSize(40).setColor('#000000');
  }

  update(time, delta) {    
  }
}