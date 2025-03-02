import { Scene } from "phaser";
import { buttonConfig } from "../../configs/button-config";

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

        this.add
            .dom(360, 600, this.button)
            .addListener("click")
            .once("click", () => {
                this.scene.start("Game");
            });
    }
}
