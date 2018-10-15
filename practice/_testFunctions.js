(function(exports) {
  function isArray(ary) {
    if (typeof ary === typeof []) {
      return true;
    }
    return false;
  }
  exports.isArray = isArray;
})(this);
