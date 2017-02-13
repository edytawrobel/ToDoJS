function NoteListView() {
  this.noteList = new NoteList();
}

NoteListView.prototype.viewNotes = function() {
  var rstr = "<ul>";
  var arr = this.noteList.getNotes();
  for ( var i = 0 ; i < arr.length; i++ ) {
    rstr = rstr + "<li>" + arr[i].getText() + "</li>";
  }
  rstr += "</ul>";
  return rstr;
}
