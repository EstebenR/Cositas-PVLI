import Player from './Player.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() { 
    this.load.spritesheet('player','Player-sheet.png',{frameWidth: 20, frameHeight: 32})
  }

  create() {
    this.player1 = new Player(this, 50, 300, 300, ['A','D','W'],10);
    this.player2 = new Player(this, 750, 300, 300, ['J','L','I'],5);
    this.p1Health = this.add.text(0,0,"Player1: " + this.player1.life).setFontSize(60);
    this.p2Health = this.add.text(0,this.p1Health.height,"Player2: " + this.player2.life).setFontSize(60);
    this.physics.add.collider(this.player1,this.player2,this.bouncePlayers,null,this);
  }

  update(time, delta) {  
      
  }

  bouncePlayers(obj1,obj2){
    obj1.life--;
    obj2.life--;
    this.updateUI();

    let bounceForce = {x:0,y:0}
    if(obj1.body.touching.right) bounceForce.x = -300;
    else if(obj1.body.touching.left) bounceForce.x = 300;

    if(obj1.body.touching.down) bounceForce.y = -300;
    else if(obj1.body.touching.up) bounceForce.y = 300;
    obj1.bounce(bounceForce);
    obj2.bounce({x:-bounceForce.x,y:-bounceForce.y});
  }

  updateUI(){
    this.p1Health.setText("Player1: "+this.player1.life);
    this.p2Health.setText("Player2: "+this.player2.life);
  }
}