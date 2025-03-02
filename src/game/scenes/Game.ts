import { Scene } from "phaser";

export class Game extends Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameText: Phaser.GameObjects.Text;

    player: Phaser.Physics.Arcade.Sprite;
    stars: Phaser.Physics.Arcade.Group;
    bombs: Phaser.Physics.Arcade.Group;
    platforms: Phaser.Physics.Arcade.StaticGroup;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    score = 0;
    gameOver = false;
    scoreText: Phaser.GameObjects.Text;

    constructor() {
        super("Game");
    }
    preload() {
        this.load.image("sky", "assets/sky.png");
        this.load.image("ground", "assets/platform.png");
        this.load.image("star", "assets/star.png");
        this.load.image("bomb", "assets/bomb.png");
        this.load.spritesheet("dude", "assets/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        //  A simple background for our game
        this.add.image(360, 640, "sky").scaleY = 2.2;

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        //  Here we create the ground.
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        this.platforms.create(360, 970, "ground").setScale(2).refreshBody();

        //  Now let's create some ledges
        this.platforms.create(480, 800, "ground");
        this.platforms.create(40, 650, "ground");
        this.platforms.create(720, 660, "ground");
        this.platforms.create(600, 500, "ground");
        this.platforms.create(400, 300, "ground");

        // The player and its settings
        this.player = this.physics.add.sprite(120, 900, "dude");

        //  Player physics properties. Give the little guy a slight bounce.
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        //  Our player animations, turning, walking left and walking right.
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("dude", {
                start: 0,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "turn",
            frames: [{ key: "dude", frame: 4 }],
            frameRate: 20,
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("dude", {
                start: 5,
                end: 8,
            }),
            frameRate: 10,
            repeat: -1,
        });

        //  Input Events
        this.cursors = this.input.keyboard!.createCursorKeys();

        //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
        this.stars = this.physics.add.group({
            key: "star",
            repeat: 9,
            setXY: {
                x: Phaser.Math.Between(30, 50),
                y: Phaser.Math.Between(70, 100),
                stepX: Phaser.Math.Between(70, 100),
            },
        });

        this.stars.children.iterate(function (child) {
            //  Give each star a slightly different bounce
            (child.body as Phaser.Physics.Arcade.Body).setBounceY(
                Phaser.Math.FloatBetween(0.4, 0.8)
            );
            return true;
        });

        this.bombs = this.physics.add.group();

        //  The score
        this.scoreText = this.add.text(16, 16, "score: 0", {
            fontSize: "32px",
            color: "#000",
        });

        //  Collide the player and the stars with the platforms
        [this.player, this.stars, this.bombs].forEach((group) => {
            this.physics.add.collider(group, this.platforms);
        });

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.physics.add.overlap(
            this.player,
            this.stars,
            this.collectStar,
            undefined,
            this
        );

        this.physics.add.collider(
            this.player,
            this.bombs,
            this.hitBomb,
            undefined,
            this
        );
    }

    update() {
        if (this.gameOver) {
            return;
        }

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);

            this.player.anims.play("left", true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);

            this.player.anims.play("right", true);
        } else {
            this.player.setVelocityX(0);

            this.player.anims.play("turn");
        }

        if (this.cursors.up.isDown && this.player.body!.touching.down) {
            this.player.setVelocityY(-330);
        }
    }

    collectStar: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback = (
        player,
        star
    ) => {
        const playerSprite = player as Phaser.Physics.Arcade.Sprite;
        const starSprite = star as Phaser.Physics.Arcade.Sprite;

        starSprite.disableBody(true, true);

        //  Add and update the score
        this.score += 10;
        this.scoreText.setText("Score: " + this.score);

        if (this.stars.countActive(true) <= 0) {
            //  A new batch of stars to collect
            this.stars.children.iterate(function (child) {
                const childBody = child.body as Phaser.Physics.Arcade.Body;
                childBody.setEnable(true);
                childBody.reset(childBody.x, 0);

                return true;
            });

            const x =
                playerSprite.x < 400
                    ? Phaser.Math.Between(400, 800)
                    : Phaser.Math.Between(0, 400);

            const bomb = this.bombs.create(x, 100, "bomb");
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
        }
    };
    hitBomb: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback = (player) => {
        this.physics.pause();

        const playerSprite = player as Phaser.Physics.Arcade.Sprite;

        playerSprite.setTint(0xff0000);
        playerSprite.anims.play("turn");

        this.gameOver = true;
    };
}
