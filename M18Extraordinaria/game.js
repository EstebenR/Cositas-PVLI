import Platform from './platform.js'
import Coin from './coin.js'
import Player from './player.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {  
    this.load.spritesheet('coin','Coins-sheet.png',{frameHeight:45,frameWidth:45});
    this.load.spritesheet('player','Player-sheet.png',{frameHeight:32,frameWidth:20});
  }

  create() {
    this.matter.world.setBounds();
    this.cameras.main.setBackgroundColor("0xFFFFFF");
    let floor = new Platform(this,700,650,1400,300);
    let plats = [];
    plats.push(new Platform(this,700,200,250,50));
    plats.push(new Platform(this,300,300,250,50));
    plats.push(new Platform(this,1100,300,250,50));

    this.createCoinAnimation();
    for(let i = 0; i < plats.length; i++){
      let coin = new Coin(this,plats[i].x,plats[i].y-55);
    }

    this.scene.matter.world.on('collisionactive', 
        (evento, cuerpo1, cuerpo2) => {if(cuerpo1.isCoin || cuerpo2..isCoin){
            console.log("bling");
        }},this);

    this.player = new Player(this,700,300,10);
  }

  createCoinAnimation(){
    this.anims.create({
      key: 'coinAnim',
      frames: this.anims.generateFrameNames('coin'),
      defaultTextureKey: null,
      frameRate: 10,
      delay: 0,
      repeat: -1,
      repeatDelay: 0
  })
  }

  update(time, delta) {    
  }
}