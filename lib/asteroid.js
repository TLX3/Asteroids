(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function(game, pos) {
    var config = {game: game, pos: pos, vel: Asteroids.Util.randomVec(10), color: Asteroid.COLOR, radius: Asteroid.RADIUS };
    Asteroids.MovingObject.call(this, config);
  };

  Asteroid.COLOR = "red";
  Asteroid.RADIUS = 40;

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if(otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

  Asteroid.prototype.draw = function(ctx) {
    ctx.drawImage(document.getElementById("asteroid"), this.pos[0], this.pos[1]);
  }

})();
