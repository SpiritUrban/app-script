//**************************************** Sidebar ***************************************** */

/**
 * For some actions when input is clicked
 */
function clicked() {
  write(1, 1, new Date().getMilliseconds());
  toast("click on input!");
}

/**
 * Show configured alert and check the user's response
 */
function showAlert() {
  // 1
  var ui = SpreadsheetApp.getUi();
  // 2
  var result = ui.alert(
    "Please confirm",
    "Are you sure you want to continue?",
    ui.ButtonSet.YES_NO
  );
  // 3 Process the user's response.
  const isYes = result == ui.Button.YES;
  if (isYes) ui.alert("Confirmation received."); // Clicked "Yes".
  else ui.alert("Permission denied."); // Clicked "No" or X in the title bar.
}

/**
 * Show configured prompt popup and check the user's response
 */
function showPrompt() {
  // 1
  var ui = SpreadsheetApp.getUi();
  // 2
  var result = ui.prompt(
    "Let's get to know each other!",
    "Please enter your name:",
    ui.ButtonSet.OK_CANCEL
  );
  // 3 Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // User clicked "OK".
    ui.alert("Your name is " + text + ".");
  } else if (button == ui.Button.CANCEL) {
    // User clicked "Cancel".
    ui.alert("I didn't get your name.");
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    ui.alert("You closed the dialog.");
  }
}
