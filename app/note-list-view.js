(function(exports) {
  function View() {

  }

  View.prototype.htmlConverter = function(list) {
    var convert = "";
    for (var i = 0; i < list.length; i++) {
      convert += '<li><div>' + list[i] + '</div></li>';
    }
    return '<ul>' + convert + '</ul>';
  };

  exports.View = View;
})(this);
