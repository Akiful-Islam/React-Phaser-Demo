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
        // For some menu niceness
        this.load.image("sky", "assets/sky.png");
        this.load.spritesheet("dude", "assets/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
        this.load.image("ground", "assets/platform.png");
        this.load.image("star", "assets/star.png");
        this.load.image("bomb", "assets/bomb.png");

        // Button and style configuration
        // I couldn't figure out how to work with react components
        // So I used document query instead
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
        //Implement button to start game
        this.add
            .dom(360, 700, this.button)
            .addListener("click")
            .once("click", () => {
                this.scene.start("Game");
            });

        // Add some niceness in the menu
        this.add.image(360, 640, "sky").scaleY = 2.2;

        this.add.text(120, 250, "Click to Start", {
            fontSize: "3.5rem",
            color: "#FFFFFF",
            fontStyle: "bold",
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
