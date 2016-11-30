var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
};

Hero.prototype = {
  talk: function(){
    return "Good day, I am " + this.name + " and I am here to do my thing."
  };
};

var drStrange = new Hero("Stephen Strange", 100, "shrooms");
var harry = new Hero("Harry Potter", 50, "chocolate frogs");

module.exports = [drStrange, harry];
