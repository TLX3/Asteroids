(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.ship = new Asteroids.Ship(this, this.randomPosition());
    this.bullets = [];
    this.addAsteroids();
  };

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 3;

  Game.prototype.randomPosition = function() {
    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
  };

  Game.prototype.addAsteroids = function() {
    while(this.asteroids.length != Game.NUM_ASTEROIDS) {
      this.add(new Asteroids.Asteroid(this, this.randomPosition()));
    }
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(function(object) {
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function(object) {
      object.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    return [(pos[0] + Game.DIM_X) % Game.DIM_X, (pos[1] + Game.DIM_Y) % Game.DIM_Y];
  };

  Game.prototype.checkCollisions = function() {
    for(var i = 0; i < this.allObjects().length; i++) {
      var obj1 = this.allObjects()[i];
      for(var j = i + 1; j < this.allObjects().length; j++) {
        var obj2 = this.allObjects()[j];
        if(obj1.isCollidedWith(obj2)) {
          obj1.collideWith(obj2);
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(obj) {
      this.asteroids = this.asteroids.filter(function(asteroid) {
        return asteroid != obj;
      });

    if(obj instanceof Asteroids.Bullet) {
      this.bullets = this.bullets.filter(function(bullet) {
        return bullet != obj;
      });
    }
  };

  Game.prototype.add = function(obj) {
    if(obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    }
    else if(obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    }
  };

  Game.prototype.allObjects = function() {
    return this.bullets.concat(this.asteroids).concat([this.ship]);
  };

  Game.prototype.isOutOfBounds = function(pos) {
    return pos[0] > this.DIM_X || pos[1] > this.DIM_Y;
  };

})();
