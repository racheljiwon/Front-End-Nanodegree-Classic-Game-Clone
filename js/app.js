"use strict";
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.random()*150 + 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + this.speed * dt;

    // update when the enemies gets out of the screen
    if (this.x >= 600) {
      this.reset();
    }

    //handle collision with the player
    if (this.checkCollisions() == true) {
      player.reset();
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.checkCollisions = function() {
  if (this.x <= player.x + 50 &&
      this.x + 50 >= player.x &&
      this.y <= player.y + 50 &&
      50 + this.y >= player.y) {
        return true;
      } else {
        return false;
      }
};

Enemy.prototype.reset = function() {
  this.x = -90;
  this.y = y;
  this.speed = Math.random()*150 + 200;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = "images/char-boy.png";
  this.x = 200;
  this.y = 400;
};

//update player's position
Player.prototype.update = function() {

  //handle player's reaching the river
  if (this.y == 50) {
    this.reset();
  }

};

// Draw the player on the screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
  if (key == 'left' && this.x >= 10) {
    this.x -= 50;
  } else if (key == 'right' && this.x <= 350) {
    this.x += 50;
  } else if (key == 'up' && this.y >= 50) {
    this.y -= 50;
  } else if (key == 'down' && this.y <= 400) {
    this.y += 50;
  } else {
    this.x = this.x;
    this.y = this.y;
  }
};

//reset the player's position
Player.prototype.reset = function() {
  this.x = 150;
  this.y = 400;
};

// Now instantiate your objects.

var enemy1 = new Enemy(-150, 55, 300);
var enemy2 = new Enemy(-100, 155, 200);
var enemy3 = new Enemy(-200, 250, 150);
var enemy4 = new Enemy(-400, 155, 130);
var enemy5 = new Enemy(-300, 55, 250);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

// Place the player object in a variable called player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
