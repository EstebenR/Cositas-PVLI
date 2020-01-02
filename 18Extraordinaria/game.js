import Player from './Player.js'
import Platform from './Platform.js'
import Coin from './Coin.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('coin','Moneda.png');
    this.load.spritesheet('player','Player-sheet.png',{frameWidth: 20, frameHeight: 32});
    this.load.image('platform','Platform.png');
    this.load.audio('coinSound', 'powerUpSound.ogg');
		this.load.audio('jumpSound', 'walkingSound.ogg');
  }

  create() {
    let ground = this.add.rectangle(700,700,1400,200,'0xFF0000');
    this.physics.add.existing(ground,true);

    this.player = new Player(this, 700, 550);
    this.physics.add.collider(this.player,ground);

    new Platform(this,700,300,this.player);
    new Platform(this,300,400,this.player);
    new Platform(this,1100,400,this.player);

    this.coinSound = this.sound.add('coinSound');
    new Coin(this,700,250,this.player);
    new Coin(this,300,350,this.player);
    new Coin(this,1100,350,this.player);

    this.points = 0;
    this.uiText = this.add.text(0,0,"Player points: " + this.points).setFontSize(70);
  }

  update(time, delta) {    
  }

  givePoint(coin){
    this.points++;
    this.uiText.setText("Player points: " + this.points);
    this.coinSound.play();
    coin.destroy();
  }
}