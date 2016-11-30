var heroes = require("../hero");
var assert = require("assert");

describe("Dr Strange", function(){

  it("should return the Dr's name", function(){
    assert.equal("Stephen Strange", heroes[0].name);
  });

  it("should return the wizard's name", function(){
    assert.equal("Harry Potter", heroes[1].name);
  });



});