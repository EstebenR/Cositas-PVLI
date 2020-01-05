export default class Wall extends Phaser.Physics.Matter.Image{
    constructor(scene,x,y,w,h){
        super(scene.matter.world,x,y,'wall');
        scene.add.existing(this);
        this.displayWidth = w;
        this.displayHeight = h;
        this.setTintFill("0x0000FF");
        this.setStatic(true);
    }
}