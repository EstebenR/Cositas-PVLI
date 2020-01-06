import Box from './Box.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
  }

  create() {
    this.cameras.main.setBackgroundColor("#FFFFFF");

    this.matter.world.setBounds();

    this.boxSize = {min:50,max:100};
    this.boxes = [];

    this.spacebar = this.input.keyboard.addKey("SPACE");
    this.spacebar.on('down',this.createRandomBox,this);
  }

  createRandomBox(){
    let x = Math.floor(Math.random()*this.game.config.width);
    let y = Math.floor(Math.random()*this.game.config.height);
    let size = Math.floor(Math.random()*(this.boxSize.max-this.boxSize.min)+this.boxSize.min);
    this.boxes.push(new Box(this,x,y,size));
  }

  update(time, delta) {    
  }
}