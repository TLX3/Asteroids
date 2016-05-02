(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(game, pos) {
    var config = {game: game, pos: pos, vel: [0, 0], color: Ship.COLOR, radius: Ship.RADIUS };
    Asteroids.MovingObject.call(this, config);
  };

  Ship.RADIUS = 20;
  Ship.COLOR = "black";

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };
})();
