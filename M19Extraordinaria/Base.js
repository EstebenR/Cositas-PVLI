import Star from './Star.js'

export default class Base extends Phaser.Physics.Matter.Sprite {
    constructor(scene,x,y){
        super(scene.matter.world,x,y,'platform');
        scene.add.existing(this);
        this.setScale(0.3);
        this.setTint('0x0000FF');
        this.setStatic(true);

        this.star = new Star(scene,x,y-50);
    }

    activateStar(){
        this.star.setVisible(true);
        this.star.setActive(true);
    }
}