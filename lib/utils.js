(function() {
  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = {};

  Util.inherits = function(Child, Parent) {
    var Surrogate = function() {};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
  };

  Util.randomVec = function(length) {
    var angle = Math.random()*2*Math.PI;
    return [Math.cos(angle)*length, Math.sin(angle)*length];
  };

})();
