var foods = require("../food");
var assert = require("assert");

describe("foods", function(){

  it("should return names", function(){
    assert.equal("shrooms", foods[0].name);
    assert.equal("chocolate frogs", foods[1].name);
    assert.equal("donuts", foods[2].name);
    assert.equal("kale", foods[3].name);
  });

});