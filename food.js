var Food = function(name, replenishmentValue, poisonous){
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisonous = poisonous;
};

var shrooms = new Food("shrooms", 10, false);
var chocolateFrogs = new Food("chocolate frogs", 15, false);
var donuts = new Food("donuts", 5, false);
var kale = new Food("kale", 20, false);

module.exports = [shrooms, chocolateFrogs, donuts, kale];