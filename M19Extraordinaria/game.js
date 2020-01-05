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
    let platforms = [];
    platforms.push(this.matter.add.image(300,200,'platform').setStatic(true));
    platforms.push(this.matter.add.image(1100,200,'platform').setStatic(true));
    platforms.push(this.matter.add.image(300,600,'platform').setStatic(true));
    platforms.push(this.matter.add.image(1100,600,'platform').setStatic(true));
    platforms.push(this.matter.add.image(700,400,'platform').setStatic(true));


    const stars = this.matter.world.nextCategory();
    this.bases = [];
    for(let i = 0; i < platforms.length; i++){
      this.bases.push(new Base(this,platforms[i].x,platforms[i].y-platforms[i].height*0.7));
    }
    this.activateStar();
  }

  update(time, delta) {    
  }

  activateStar(){
    let chosen = this.bases[Math.floor(Math.random()*this.bases.length)];
    console.log(chosen);
    chosen.activateStar();
  }
}