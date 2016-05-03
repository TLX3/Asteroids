(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    setInterval(function() {
      this.game.step();
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };

  GameView.prototype.bindKeyHandlers = function() {
    var self = this;
    key("up", function() { self.game.ship.power([0, -2]); });
    key("down", function() { self.game.ship.power([0, 2]); });
    key("left", function() { self.game.ship.power([-2, 0]); });
    key("right", function() { self.game.ship.power([2, 0]); });
    key("space", function() { self.game.ship.fireBullet(); });
  };

})();
