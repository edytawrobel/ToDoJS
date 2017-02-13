function NoteList() {
  this._noteList = [];
}

NoteList.prototype.addNote = function(text) {
  var note = new Note();
  note.setText(text);
  this._noteList.push(note);
}

NoteList.prototype.getNotes = function() {
  return this._noteList;
}
