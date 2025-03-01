import { Scene } from "phaser";
import React from "react";
import { createRoot } from "react-dom/client";
import Button from "../../components/Button";

export class Menu extends Scene {
    button: React.FC;

    constructor() {
        super("Game");
    }
    preload() {
        this.button = Button;
    }

    create() {
        const buttonContainer = this.add
            .dom(this.scale.width / 2, this.scale.height / 2)
            .createFromCache("button");
    }

    update() {}
}
