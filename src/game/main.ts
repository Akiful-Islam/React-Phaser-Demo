import { AUTO, Game } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

const resolution = {
    width: 720,
    height: 1280,
};
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: resolution.width,
    height: resolution.height,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    parent: "game-container",
    backgroundColor: "#028af8",
    scene: [],
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;

