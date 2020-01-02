import Platform from './platform.js';
import Player from './Player.js';
import Star from './Star.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {
  	this.load.image('platform','Platform.png');
  	this.load.image('player','Player.png');
  	this.load.image('star','Star.png');
  }

  create() {
  	this.player = new Player(this,400,500);
  	this.points=0;
  	//platforms
  	this.platforms = this.add.group();
  	this.platforms.add(new Platform(this,200,200,this.player));
  	this.platforms.add(new Platform(this,600,200,this.player));
  	this.platforms.add(new Platform(this,200,400,this.player));
  	this.platforms.add(new Platform(this,600,400,this.player));
  	this.platforms.add(new Platform(this,400,300,this.player));

  	this.generateStar();
  	this.pointsText = this.add.text(300,300,"Points = 0");
  }

  update(time, delta) {   
  	this.pointsText.setText(["Points = ",this.points]);
  }

  generateStar(){
  	let plat = Math.floor(Math.random()*5);
  	let chosen = this.platforms.getChildren()[plat];
  	let star = new Star(this,chosen.x,chosen.y-chosen.height/2-32,this.player);
  }
}