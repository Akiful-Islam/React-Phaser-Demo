import { Scene } from "phaser";
import React from "react";
import { buttonConfig } from "../../configs/button-config";

export class Menu extends Scene {
    button: React.FC;
    background: Phaser.GameObjects.Image;
    player: Phaser.Physics.Arcade.Sprite;
    platforms: Phaser.Physics.Arcade.StaticGroup;
    title: Phaser.GameObjects.Text;

    constructor() {
        super("Menu");
    }
    preload() {
        this.load.image("sky", "assets/sky.png");
    }

    create() {
        this.add.image(360, 640, "sky").scaleY = 2.2;
        const { buttonText, buttonStyle } = buttonConfig;
        const button = document.createElement("button");
        button.id = "button";
        button.innerText = buttonText;
        button.style.color = buttonStyle.color;
        button.style.backgroundColor = buttonStyle.backgroundColor;
        button.style.width = buttonStyle.width;
        button.style.height = buttonStyle.height;
        button.style.borderRadius = buttonStyle.borderRadius;
        button.style.fontSize = buttonStyle.fontSize;

        this.add
            .dom(360, 600, button)
            .addListener("click")
            .once("click", () => {
                this.scene.start("Game");
            });
    }

    update() {}
}
