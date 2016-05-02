(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function(game, pos) {
    var config = {game: game, pos: pos, vel: Asteroids.Util.randomVec(10), color: Asteroid.COLOR, radius: Asteroid.RADIUS };
    Asteroids.MovingObject.call(this, config);
  };

  Asteroid.COLOR = "red";
  Asteroid.RADIUS = 40;

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
})();
