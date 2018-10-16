(function(exports) {
  let Test = new Assert();

  function testhtmlConverter() {
    let testNote = new Note();
    let testView = new View();
    Test.expect(testView.htmlConverter(["Brain", "is", "the", "tastiest"]));
    Test.toEqual("<ul><li><div>Brain</div></li><li><div>is</div></li><li><div>the</div></li><li><div>tastiest</div></li></ul>");
  }

  function testhtmlConverter2() {
    let testNote = new Note();
    testNote.addNote("hello")
    testNote.addNote("swd")
    testNote.addNote("goodbye")
    let testView = new View();
    Test.expect(testView.htmlConverter(testNote.LIST_OF_NOTES));
    Test.toEqual("<ul><li><div>hello</div></li><li><div>swd</div></li><li><div>goodbye</div></li></ul>");
  }



  testhtmlConverter();
  testhtmlConverter2();
})(this);
