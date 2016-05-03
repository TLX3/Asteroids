(function(){
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(game, pos) {
    var config = {game: game, pos: pos, vel: [0, 0], color: Ship.COLOR, radius: Ship.RADIUS };
    Asteroids.MovingObject.call(this, config);
  };

  Ship.RADIUS = 20;
  Ship.COLOR = "#FFFFFF";

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
  };

  Ship.prototype.fireBullet = function() {
    if(this.vel[0] != 0 || this.vel[1] != 0) {
      this.game.add(new Asteroids.Bullet(this.game, this.pos, [this.vel[0]*2, this.vel[1]*2]));
    }
  };

  Ship.prototype.draw = function(ctx) {
    ctx.drawImage(document.getElementById("ship"), this.pos[0], this.pos[1]);
  };

})();
