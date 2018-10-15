(function(exports) {
  function testCheckIfArray() {
    let testNote = new Note();

    if (!isArray(testNote.returnNotes())) {
      throw new Error("Did not return notes array");
    } else {
      console.log("%c Pass the test!!!!!!!!!!!!!!!!! <3", "color:green");
    }
  }
  testCheckIfArray();
})(this);

// let testNote = new Note();
// testNote.addNote("fix test");
// if (!testNote.returnNotes().includes("fiefx test")) {
//   throw new Error("Did not return notes array");
//   // console.log("Error!");

/* if(testNote.returnNotes === []) <- this fails because 
it's actually an object rather than array */
