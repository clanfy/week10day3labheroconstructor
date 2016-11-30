var foods = require("../food");
var shrooms = foods[0];
var chocolateFrogs = foods[1];
var donuts = foods[2];
var kale = foods[3];
var scabbers = require("../rat");
var assert = require("assert");

describe("Foods", function(){

  it("should return names", function(){
    assert.equal("shrooms", shrooms.name);
    assert.equal("chocolate frogs", foods[1].name);
    assert.equal("donuts", foods[2].name);
    assert.equal("kale", foods[3].name);
  });

  it("should return replenishment value", function(){
    assert.equal(10, foods[0].replenishmentValue);
    assert.equal(15, chocolateFrogs.replenishmentValue);
    assert.equal(5, foods[2].replenishmentValue);
    assert.equal(20, foods[3].replenishmentValue);
  });

  it("should return whether it is poisonous", function(){
    assert.equal(false, foods[0].poisonous);
    assert.equal(false, foods[1].poisonous);
    assert.equal(false, donuts.poisonous);
    assert.equal(false, kale.poisonous);
  });

  it("should confirm that food is poisoned", function(){
    scabbers.poison(donuts);
    assert.equal(true, donuts.poisonous);
  });

});





