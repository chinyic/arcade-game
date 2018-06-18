// Enemies our player must avoid

var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    //x on x-axis, y on y-axis
    this.y = y;
    // add speed? this.speed = speed; speed for enemies
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    //change x coordinate of enemy multiplied by speed
    // needs a Math function

};
// insert function for collision if player touches bug
// reset to beginning


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
  this.sprite = 'images/char-horn-girl.png';
  this.x = x;
  this.y = y;
  this.speed = speed;

};
//create player function

Player.prototype.update = function (dt){

};

//render player function

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player handleInput() methods
Player.prototype.handleInput = function (keyPress) {
  if (keyPress === 'left' && this.x > 0) {
    player.x -= 10;
    //player x coordinate, boundaries of canvas
  }
  if (keyPress === 'right' && this.x <=400){
    player.x += 10;
  }
  if (keyPress === 'up' && this.y >0){
    player.y -= 10;
  }
  if (keyPress === 'down' &&  this.y<420){
    player.y += 10;
  }
  console.log('keyPress: ' + keyPress);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Place the player object in a variable called player
var player = new Player (210, 420);


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
