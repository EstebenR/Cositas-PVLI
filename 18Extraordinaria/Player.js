export default class Player extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y){
        super(scene,x,y,'player',0);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.collideWorldBounds = true;
        this.setScale(2);
        
        this.speed = 300;
        this.jump = 450;

        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.spaceBar = this.scene.input.keyboard.addKey('SPACE');
        this.jumpSound = this.scene.sound.add('jumpSound');

        this.setUpAnimations();
    }

    preUpdate(t,dt){
        super.preUpdate(t,dt);
        if(this.cursors.right.isDown){
            this.body.setVelocityX(this.speed);
        }else if(this.cursors.left.isDown){
            this.body.setVelocityX(-this.speed);
        }else{
            this.body.setVelocityX(0);
            this.anims.play('PlayerIdle',true);
        }

        if (Phaser.Input.Keyboard.JustDown(this.cursors.right)) {this.anims.play('PlayerRight',true);}
        if (Phaser.Input.Keyboard.JustDown(this.cursors.left)) {this.anims.play('PlayerLeft',true);}


        if(this.spaceBar.isDown && this.body.onFloor()){
            this.body.setVelocityY(-this.jump);
            this.jumpSound.play();
        }
    }

    setUpAnimations(){
		//Animations
		this.scene.anims.create({
			key: 'PlayerIdle',
			frames: [ { key: 'player', frame: 0 } ],
			frameRate: 20,
			repeat: -1
		})
		this.scene.anims.create({
    	key: 'PlayerRight',
    	frames: this.scene.anims.generateFrameNumbers('player', { start: 5, end: 6 }),
    	frameRate: 5,
    	repeat: -1
		});

		this.scene.anims.create({
    	key: 'PlayerLeft',
    	frames: this.scene.anims.generateFrameNumbers('player', { start: 7, end: 8 }),
    	frameRate: 5,
    	repeat: -1
		});
	}
}