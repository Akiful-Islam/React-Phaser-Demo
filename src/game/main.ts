import { Game } from "phaser";
import { config } from "./configs/game-config";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig

// Moved the config to /src/configs/game-config.ts

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;

