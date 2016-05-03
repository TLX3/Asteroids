(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(config) {
    this.game = config.game;
    this.pos = config.pos;
    this.vel = config.vel;
    this.radius = config.radius;
    this.color = config.color;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  };

  MovingObject.prototype.move = function() {
    var dx = this.pos[0] + this.vel[0];
    var dy = this.pos[1] + this.vel[1];
    if(this.isWrappable()) {
      this.pos = this.game.wrap([dx, dy]);
    }
    else {
      if(this.game.isOutOfBounds(this.pos)) {
        this.game.remove(this);
      }
      else {
        this.pos = [dx, dy];
      }
    }
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var distance = Asteroids.Util.distance(this.pos, otherObject.pos);
    return distance < (this.radius + otherObject.radius);
  };

  MovingObject.prototype.collideWith = function(otherObject) {

  };

  MovingObject.prototype.isWrappable = function() {
    return true;
  }

})();
