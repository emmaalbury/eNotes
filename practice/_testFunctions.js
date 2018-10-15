(function(exports) {
  function isArray(ary) {
    if (typeof ary !== typeof []) {
      throw new Error(
        `Did not return notes array. Expected: [] but received: ${ary}`
      );
    } else {
      console.log("%c Pass the test!!!!!!!!!!!!!!!!! <3", "color:green");
    }
  }
  exports.isArray = isArray;
})(this);
