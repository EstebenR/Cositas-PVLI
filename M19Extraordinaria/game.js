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
    this.platforms.push(this.matter.add.image(300,200,'platform'));
    this.platforms.push(this.matter.add.image(1100,200,'platform'));
    this.platforms.push(this.matter.add.image(300,600,'platform'));
    this.platforms.push(this.matter.add.image(1100,600,'platform'));
    this.platforms.push(this.matter.add.image(700,400,'platform'));
  }

  update(time, delta) {    
  }
}