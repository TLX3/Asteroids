(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function(pos) {
    var config = {pos: pos, vel: Asteroids.Util.randomVec(10), color: Asteroid.COLOR, radius: Asteroid.RADIUS };
    Asteroids.MovingObject.call(this, config);
  };

  Asteroid.COLOR = "red";
  Asteroid.RADIUS = "20";

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
})();
