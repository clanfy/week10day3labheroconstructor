var heroes = require("../hero");
var drStrange = heroes[0];
var harry = heroes[1];
var foods = heroes[2];
var shrooms = foods[0]
var chocolateFrogs = foods[1]
var donuts = foods[2]
var kale = foods[3]
var assert = require("assert");

describe("Hero", function(){

  it("should return the Dr's name", function(){
    assert.equal("Stephen Strange", drStrange.name);
  });

  it("should return the wizard's name", function(){
    assert.equal("Harry Potter", harry.name);
  });

  it("should return health", function(){
    assert.equal(100, drStrange.health);
  });

  it("should return favorite food", function(){
    assert.equal("chocolate frogs", harry.faveFood);
  });

  it("should be able to talk", function(){
    assert.equal("Good day, I am Stephen Strange and I am here to do my thing.", drStrange.talk());
  });

  it("eating food that isn't fave should increase health", function(){
    drStrange.eat(kale);
    assert.equal(120, drStrange.health);
  });

  it("eating fave food increases health by 1.5 value", function(){
    harry.eat(chocolateFrogs);
    assert.equal(72.5, harry.health);
  });






});