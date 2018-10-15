(function(exports) {
  function Assert() {}

  Assert.prototype.isArray = function(ary) {
    if (typeof ary !== typeof []) {
      throw new Error(
        `Did not return notes array. Expected: [] but received: ${ary}`
      );
    } else {
      console.log("%c Pass the test!!!!!!!!!!!!!!!!! <3", "color:green");
    }
  };

  Assert.prototype.expect = function(storedValue) {
    this.storedValue = storedValue;
    return this.storedValue;
  };

  Assert.prototype.toEqual = function(solution) {
    if (solution === this.storedValue) {
      console.log("%c Pass the test!!!!!!!!!!!!!!!!! <3", "color:green");
    } else {
      throw new Error(
        `Expected '${solution}' but received '${this.storedValue}'`
      );
    }
  };

  exports.Assert = Assert;
})(this);
