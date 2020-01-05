import Base from './Base.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.image('platform','Platform.png');
    this.load.image('star','Star.png');
    this.load.spritesheet('player','Player-sheet.png',{frameWidth: 20, frameHeight: 32});
  }

  create() {
    this.platforms = [];
    this.platforms.push(this.matter.add.image(300,200,'platform').setStatic(true));
    this.platforms.push(this.matter.add.image(1100,200,'platform').setStatic(true));
    this.platforms.push(this.matter.add.image(300,600,'platform').setStatic(true));
    this.platforms.push(this.matter.add.image(1100,600,'platform').setStatic(true));
    this.platforms.push(this.matter.add.image(700,400,'platform').setStatic(true));

    for(let i = 0; i < this.platforms.length; i++){
      new Base(this,this.platforms[i].x,this.platforms[i].y-this.platforms[i].height);
    }
  }

  update(time, delta) {    
  }
}