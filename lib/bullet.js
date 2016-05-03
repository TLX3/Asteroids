(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Bullet = Asteroids.Bullet = function(game, pos, vel) {
    var config = {game: game, pos: pos, vel: vel, radius: Bullet.RADIUS, color: Bullet.COLOR};
    Asteroids.MovingObject.call(this, config);
  };

  Bullet.RADIUS = 10;
  Bullet.COLOR = "blue";

  Asteroids.Util.inherits(Asteroids.Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function(otherObject) {
    if(otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

  Bullet.prototype.isWrappable = function() {
    return false;
  }

})();
