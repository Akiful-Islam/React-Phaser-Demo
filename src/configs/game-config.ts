import { AUTO } from "phaser";
import { Game } from "../game/scenes/Game";

const resolution = {
    width: 720,
    height: 1280,
};
export const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: resolution.width,
    height: resolution.height,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: "game-container",
    backgroundColor: "#028af8",
    scene: [Game],
};
