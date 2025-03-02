import { Scene } from "phaser";
import { buttonConfig } from "../configs/button-config";

export class Menu extends Scene {
    button: HTMLButtonElement;
    background: Phaser.GameObjects.Image;
    player: Phaser.Physics.Arcade.Sprite;
    platforms: Phaser.Physics.Arcade.StaticGroup;
    title: Phaser.GameObjects.Text;

    constructor() {
        super("Menu");
    }
    preload() {
        this.load.image("sky", "assets/sky.png");
        this.load.spritesheet("dude", "assets/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
        this.load.image("ground", "assets/platform.png");
        this.load.image("star", "assets/star.png");
        this.load.image("bomb", "assets/bomb.png");

        const { buttonText, buttonStyle } = buttonConfig;
        this.button = document.createElement("button");
        this.button.id = "button";
        this.button.innerText = buttonText;
        this.button.style.color = buttonStyle.color;
        this.button.style.backgroundColor = buttonStyle.backgroundColor;
        this.button.style.width = buttonStyle.width;
        this.button.style.height = buttonStyle.height;
        this.button.style.borderRadius = buttonStyle.borderRadius;
        this.button.style.fontSize = buttonStyle.fontSize;
    }

    create() {
        this.add.image(360, 640, "sky").scaleY = 2.2;

        this.add.text(120, 250, "Click to Start", {
            fontSize: "3.5rem",
            color: "#FFFFFF",
            fontStyle: "bold",
        });

        this.add
            .dom(360, 700, this.button)
            .addListener("click")
            .once("click", () => {
                this.scene.start("Game");
            });

        this.add.image(360, 1100, "ground").setScale(10);
        this.add.image(360, 915, "dude");

        for (let i = 0; i < 11; i++) {
            if (i === 5) {
                this.add.image(110 + i * 50, 500, "bomb");
                continue;
            }

            this.add.image(110 + i * 50, 500, "star");
        }
    }
}
