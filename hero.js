var foods = require('./food');
var shrooms = foods[0];
var chocolateFrogs = foods[1];
var donuts = foods[2];
var kale = foods[3];

var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
};

Hero.prototype = {
  talk: function(){
    return "Good day, I am " + this.name + " and I am here to do my thing."
  },
  eat: function(food){
    if (food.poisonous === true){
      this.health -= (food.replenishmentValue * 0.5);
    }else if (food.name === this.faveFood){
      this.health += (food.replenishmentValue * 1.5);
    } else { 
      this.health += food.replenishmentValue;
    }
  }
};

var drStrange = new Hero("Stephen Strange", 100, "shrooms");
var harry = new Hero("Harry Potter", 50, "chocolate frogs");

module.exports = [drStrange, harry, foods];
