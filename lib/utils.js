(function() {
  var Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = {};

  Util.inherits = function(Child, Parent) {
    var Surrogate = function() {};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
    Child.prototype.constructor = Child;
  };


})();
