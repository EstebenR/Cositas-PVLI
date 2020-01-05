export default class Star extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y){
        super(scene.matter.world,x,y,'star');
        scene.add.existing(this);
        this.setStatic(true);
        this.setCollisionCategory(scene.stars);
        this.setVisible(false);
        this.setActive(false);
    }
}