

//**************************************** Test ***************************************** */

function test() {
  console.log('booting...');
  writeMultiple(1, 2, 2, 2, [[1, 2], [1, 2]])
}



function change() {
  //alert('change');
  //console.log('Change');
  write(1, 1, new Date().getMilliseconds());
  toast("Hi there!");
}



function showAlert() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result = ui.alert(
    'Please confirm',
    'Are you sure you want to continue?',
    ui.ButtonSet.YES_NO);

  // Process the user's response.
  if (result == ui.Button.YES) {
    // User clicked "Yes".
    ui.alert('Confirmation received.');
  } else {
    // User clicked "No" or X in the title bar.
    ui.alert('Permission denied.');
  }
}

function showPrompt() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result = ui.prompt(
    'Let\'s get to know each other!',
    'Please enter your name:',
    ui.ButtonSet.OK_CANCEL);

  // Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // User clicked "OK".
    ui.alert('Your name is ' + text + '.');
  } else if (button == ui.Button.CANCEL) {
    // User clicked "Cancel".
    ui.alert('I didn\'t get your name.');
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    ui.alert('You closed the dialog.');
  }
}