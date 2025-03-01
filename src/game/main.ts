import { AUTO, Game } from "phaser";
import { Boot } from "./scenes/Boot";
import { Game as MainGame } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";

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
    scene: [Boot, Preloader, MainMenu, MainGame, GameOver],
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;

