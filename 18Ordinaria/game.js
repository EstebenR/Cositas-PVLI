import Caja from './Caja.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() { 
    this.load.audio('sound','powerUpSound.ogg');
  }

  create() {
    this.cajas = [];
    this.selected = {object:undefined, position:undefined};

    this.sound = this.sound.add('sound');

    this.spacebar  = this.input.keyboard.addKey('SPACE');
    this.s = this.input.keyboard.addKey('S');
    this.d = this.input.keyboard.addKey('D');

    this.impulsesSetUp();
  }

  preUpdate(t, dt){
    
  }

  update(time, delta) {    
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)){ this.createItem();}
    if(Phaser.Input.Keyboard.JustDown(this.d)){ this.deleteCurrent();};
    
    if (this.s.isDown && this.selected.object != undefined){
      if(this.selected.object.angle == 180) this.selected.object.angle = -180;
      else this.selected.object.angle++;
    }

    
  }

  createItem(){
    let size = Math.floor(Math.random()*50+50);
    let x = Math.floor(Math.random()*(this.game.config.width-size)+size);
    let y = Math.floor(Math.random()*(this.game.config.height-size)+size);
    let speed = Math.floor(Math.random()*500+100);
    let direction = Math.floor(Math.random()*360);
    this.cajas.push(new Caja(this,x,y,size,speed,direction,this.cajas));
    this.selectBox(this.cajas.length-1);
  }

  selectBox(caja){
    if(this.selected.object != undefined){
      this.selected.object.fillColor = '0xFF00FF';
    }
    this.selected.position = caja;
    this.selected.object = this.cajas[caja];
    this.selected.object.fillColor = '0x00FF00';
    this.sound.play();
  }

  deleteCurrent(){
    this.selected.object.destroy();
    this.selected.object = undefined;
    this.cajas.splice(this.selected.position,1);
    if(this.cajas.length>0){
      this.selectBox(Math.floor(Math.random()*this.cajas.length));
    }
    this.sound.play();
  }

  impulsesSetUp(){
    this.boxImpulse = 50;
    this.i = this.input.keyboard.addKey('I');
    this.j = this.input.keyboard.addKey('J');
    this.k = this.input.keyboard.addKey('K');
    this.l = this.input.keyboard.addKey('L');

    this.i.on('down', event => { 
      if(this.selected.object != undefined) this.selected.object.addSpeed(0,-this.boxImpulse); this.sound.play();});
    this.j.on('down', event => { 
      if(this.selected.object != undefined) this.selected.object.addSpeed(-this.boxImpulse,0); this.sound.play();});
    this.k.on('down', event => { 
      if(this.selected.object != undefined) this.selected.object.addSpeed(0,this.boxImpulse); this.sound.play();});
    this.l.on('down', event => {
       if(this.selected.object != undefined) this.selected.object.addSpeed(this.boxImpulse,0); this.sound.play();});
  }
}