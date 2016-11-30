var foods = require('./food');
var shrooms = foods[0];
var chocolateFrogs = foods[1];
var donuts = foods[2];
var kale = foods[3];

var Rat = function (name){
  this.name = name;
};

Rat.prototype = {
  poison: function(food){
    food.poisonous = true;
  }
};

var scabbers = new Rat("scabbers");

module.exports = scabbers;