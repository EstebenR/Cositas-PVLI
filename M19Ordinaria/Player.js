export default class Player extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y){
        super(scene.matter.world,x,y,'player');
    }
}