function NoteListView(noteList) {
  this._noteListView = "";
  this.noteList = noteList;
}

NoteListView.prototype.viewNotes = function() {
  var rstr = "<ul>";
  for ( var i = 0 ; i < this.noteList.length; i++ ) {
    rstr = rstr + "<li>" + String(this.noteList[i]) + "</li>";
    // rstr += "<li>" + this.noteList[i].getText() + "</li>";
  }
  rstr += "</ul>";
  return rstr;
}
