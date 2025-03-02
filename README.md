# Phaser React TypeScript Template

This is a Phaser 3 project template that uses the React framework and Vite for bundling. It includes a bridge for React to Phaser game communication, hot-reloading for quick development workflow and scripts to generate production-ready builds.

### Versions

This template has been updated for:

-   [Phaser 3.88.2](https://github.com/phaserjs/phaser)
-   [React 18.2.0](https://github.com/facebook/react)
-   [Vite 5.3.1](https://github.com/vitejs/vite)
-   [TypeScript 5.2.2](https://github.com/microsoft/TypeScript)

![screenshot](screenshot.png)

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command               | Description                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| `npm install`         | Install project dependencies                                                                             |
| `npm run dev`         | Launch a development web server                                                                          |
| `npm run build`       | Create a production build in the `dist` folder                                                           |
| `npm run dev-nolog`   | Launch a development web server without sending anonymous data (see "About log.js" below)                |
| `npm run build-nolog` | Create a production build in the `dist` folder without sending anonymous data (see "About log.js" below) |

## Project Structure

We have provided a default project structure to get you started. This is as follows:

-   `index.html` - A basic HTML page to contain the game.
-   `src` - Contains the React client source code.
-   `src/main.tsx` - The main **React** entry point. This bootstraps the React application.
-   `src/vite-env.d.ts` - Global TypeScript declarations, provide types information.
-   `src/App.tsx` - The main React component.
-   `src/game/PhaserGame.tsx` - The React component that initializes the Phaser Game and serve like a bridge between React and Phaser.
-   `src/game/EventBus.ts` - A simple event bus to communicate between React and Phaser.
-   `src/game` - Contains the game source code.
-   `src/game/main.ts` - The main **game** entry point. This contains the game configuration and start the game.
-   `src/game/scenes/` - The Phaser Scenes are in this folder.
-   `src/game/configs/` - The Phaser Game Configs are in this folder.
-   `public/style.css` - Some simple CSS rules to help with page layout.
-   `public/assets` - Contains the static assets used by the game.

