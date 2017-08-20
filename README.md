# Classic Arcade Game Clone

This project is composed of html, css, javascript files that creates a game. Html and css files offers fundamental elements for the game, and the three javascript files(_engine.js, app.js, resources.js_) make the game run well.

## Javascript files

- **engine.js** :
This file makes the functionality of the game. It makes the background board and brings the player and the enemies from _app.js_.

- **resources.js** :
This file concerns about the images. It brings appropriate images from the _images_ folder and renders them on the game.

- **app.js** :
This file creates Enemy class and Player class and also the methods for both of them. Then there are several instances for the classes.

## Game Instruction

### Rule of the game

In this game, there are a player and several enemies. You can move the player with up, down, right, left keys on keyboard. When the player reaches the river without being collided with the enemies, you win. Then you can restart the game. However, if the player collides with the enemy, you lose and you need to start the game again.

If you want to watch the video about the game, click [here](https://youtu.be/SxeHV1kt7iU).

### Starting the game

You can start the game by downloading **frontend-nanodegree-arcade-game-master** folder and run the index.html on your web browser. Enjoy it!
