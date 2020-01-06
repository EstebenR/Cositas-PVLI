import Platform from './platform.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
  }

  create() {
    this.matter.world.setBounds();
    this.cameras.main.setBackgroundColor("0xFFFFFF");
    let floor = new Platform(this,300,300,300,300);
  }

  update(time, delta) {    
  }
}