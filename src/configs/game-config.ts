import { AUTO } from "phaser";
import { Game } from "../game/scenes/Game";
import { Menu } from "../game/scenes/Menu";

const resolution = {
    width: 720,
    height: 1280,
};
export const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    dom: {
        createContainer: true,
    },
    scale: {
        width: resolution.width,
        height: resolution.height,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 300 },
            debug: false,
        },
    },
    parent: "game-container",
    backgroundColor: "#028af8",
    scene: [Menu, Game],
};
