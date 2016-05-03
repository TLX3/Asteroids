(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.lastTime = 0;
  };

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    requestAnimationFrame(this.animate.bind(this));
  };

  GameView.prototype.bindKeyHandlers = function() {
    var self = this;
    key("up", function() { self.game.ship.power([0, -2]); });
    key("down", function() { self.game.ship.power([0, 2]); });
    key("left", function() { self.game.ship.power([-2, 0]); });
    key("right", function() { self.game.ship.power([2, 0]); });
    key("space", function() { self.game.ship.fireBullet(); });
  };

  GameView.prototype.animate = function(currentTime) {
    var delta = currentTime - this.lastTime;
    this.game.moveObjects(delta);
    this.game.step(delta);
    this.game.draw(this.ctx);
    this.lastTime = currentTime;
    requestAnimationFrame(this.animate.bind(this));
  };

})();
