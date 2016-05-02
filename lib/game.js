(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 15;

  Game.prototype.randomPosition = function() {
    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
  };

  Game.prototype.addAsteroids = function() {
    while(this.asteroids.length != Game.NUM_ASTEROIDS) {
      this.asteroids.push(new Asteroids.Asteroid(this, this.randomPosition()));
    }
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    return [(pos[0] + Game.DIM_X) % Game.DIM_X, (pos[1] + Game.DIM_Y) % Game.DIM_Y];
  }

})();
