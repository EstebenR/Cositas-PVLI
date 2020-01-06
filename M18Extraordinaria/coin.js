export default class Coin extends Phaser.Physics.Matter.Sprite{
    constructor(scene,x,y){
        super(scene.matter.world,x,y,'coin',0);
        scene.add.existing(this);
        this.setStatic(true);

        scene.anims.create({
            key: 'coinAnim',
            frames: scene.anims.generateFrameNames('coin'),
            defaultTextureKey: null,
            frameRate: 10,
            delay: 0,
            repeat: -1,
            repeatDelay: 0
        })

        scene.anims.play('coinAnim',this);
    }
}