export default class Box extends Phaser.GameObjects.Rectangle{
    constructor(scene,x,y,size){
        super(scene,x,y,size,size,"0x0000FF");
        scene.add.existing(this);
        let collider = scene.matter.add.rectangle(x,y,size,size);
        scene.matter.add.gameObject(this,collider);
    }
}