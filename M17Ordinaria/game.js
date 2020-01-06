import Player from './Player.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.spritesheet('player','Player-sheet.png',{frameWidth:20,frameHeight:32});
  }

  create() {
    this.matter.world.setBounds();

    this.player1 = new Player(this,400,300,10,{up:"W",left:"A",right:"D"},10);
    this.player2 = new Player(this,1100,300,10,{up:"I",left:"J",right:"L"},5);
  }

  update(time, delta) {    
  }
}