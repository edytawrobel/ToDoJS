function Note() {
  this._text = "";
};

Note.prototype.getText = function() {
  return this._text;
};

Note.prototype.setText = function(text) {
  this._text = text;
};
