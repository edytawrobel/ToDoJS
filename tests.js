var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    console.log(assertionToCheck + "test passed!")
  }
}

function testReturnsNoteText() {
  var note = new Note();
  note.setText("this is the first note");
  assert.isTrue(note.getText() === "this is the first note");
}

testReturnsNoteText();
