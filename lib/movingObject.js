(function() {
  var Asteroids = window.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(config) {
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
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

})();
