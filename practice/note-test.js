(function(exports) {
  function testCheckIfArray() {
    let testNote = new Note();
    isArray(testNote.returnNotes());
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
