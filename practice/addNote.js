(function(exports) {
  function Note() {
    this.LIST_OF_NOTES = [];
  }

  Note.prototype.addNote = function(note) {
    this.LIST_OF_NOTES.push(note);
    return note;
  };

  Note.prototype.returnNotes = function() {
    return this.LIST_OF_NOTES;
  };

  exports.Note = Note;
  // exports.getListOfNotes = returnNotes;
})(this);
