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
    if(this.x < 550){
      this.x += this.speed * dt;
//this.x = this.x + this.speed multiplied by time delta
    } else {
      this.x = 0;
    }
    //change x coordinate of enemy multiplied by speed
    // needs a Math function

};
// insert function for collision if player touches bug
// reset to beginning

/*https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
var rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}*/

Enemy.prototype.checkCollisions = function() {
  var playerBox = {x: player.x, y: player.y, width: 50, height: 50};
  var enemyBox = {x: this.x, y: this.y, width: 50, height: 60};

  if (playerBox.x < enemyBox.x + enemyBox.width &&
      playerBox.x + playerBox.width > enemyBox.x &&
      playerBox.y < enemyBox.y + enemyBox.height &&
      playerBox.height + playerBox.y > enemyBox.y) {
      // collision detected! call collision function
      this.collisionDetected();
  }
};

Enemy.prototype.collisionDetected = function () {
  player.charReset();
}
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
Player.prototype.charReset = function () {
    this.x = 210;
    this.y = 420;

}

Player.prototype.update = function (dt){

};

//render player function

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player handleInput() methods
Player.prototype.handleInput = function (keyPress) {
  if (keyPress === 'left' && this.x > 0) {
    player.x -= 60;
    //player x coordinate, boundaries of canvas
  }
  if (keyPress === 'right' && this.x <=400){
    player.x += 60;
  }
  if (keyPress === 'up' && this.y >0){
    player.y -= 60;
  }
  if (keyPress === 'down' &&  this.y<420){
    player.y += 60;
  }
  console.log('keyPress: ' + keyPress);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy(-100,60, 100);
const enemy2 = new Enemy (-100, 140, 60);

const allEnemies = [enemy1, enemy2];
// Place the player object in a variable called player
var player = new Player (210, 420);

allEnemies.push(enemy1, enemy2);
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
