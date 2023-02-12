

//************************************** Menu and Items ******************************************* */
/**
 * Creates a custom menu in Google Sheets when the spreadsheet opens.
 */
function onOpen() {
  try {
    var ui = SpreadsheetApp.getUi();
    ui
      .createMenu('FEATURES 1')
      .addItem('Sidebar 1', 'showSidebar1')
      .addItem('Sidebar 2', 'showSidebar2')
      .addSeparator()
      .addSubMenu(ui.createMenu('Sub-menu')
        .addItem('Base dialog', 'showDialog')
        .addItem('Picker dialog', 'showPicker')
      )
      .addSeparator()
      .addItem('showMessageBox', 'showMessageBox')
      .addSeparator()
      .addItem('Send E-mail to you self', 'sendEmail')
      .addToUi();

    ui
      .createMenu('FEATURES 2')
      .addSubMenu(ui.createMenu('Examples')
        .addItem('Example', 'plug')
        .addItem('Example', 'plug')
        .addItem('Example', 'plug')
      )
      .addSeparator()
      .addSubMenu(ui.createMenu('Examples')
        .addItem('Example', 'plug')
        .addItem('Example', 'plug')
        .addItem('Example', 'plug')
      )
      .addSeparator()
      .addSubMenu(ui.createMenu('Examples')
        .addItem('Example', 'plug')
        .addItem('Example', 'plug')
        .addItem('Example', 'plug')
      )
      .addToUi();
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log('Failed with error: %s', e.error);
  }
}

function plug() {
  alert('Just PLUG')
}

function sendEmail() {
  var recipient = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(recipient, 'Email TITLE', 'Email CONTENT ...');
}

function showMessageBox() {
  Browser.msgBox('You clicked it!');
}

function showSidebar1() {
  var html = HtmlService
    .createTemplateFromFile('__Sidebar')
    .evaluate()
    .setTitle('Calculation Sidebar');
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

function showSidebar2() {
  var html = HtmlService
    .createTemplateFromFile('__Index')
    .evaluate()
    .setTitle('Calculation Sidebar');
  // var html = HtmlService.createHtmlOutputFromFile('Sidebar')
  //   .setTitle('Calculation Sidebar');
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('__Page')
    .setWidth(400)
    .setHeight(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showModalDialog(html, 'My custom dialog');
}

/**
 * Displays an HTML-service dialog in Google Sheets that contains client-side
 * JavaScript code for the Google Picker API.
 */
function showPicker() {
  try {
    const html = HtmlService.createHtmlOutputFromFile('__Dialog.html')
      .setWidth(600)
      .setHeight(425)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi().showModalDialog(html, 'Select a file');
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log('Failed with error: %s', e.error);
  }
}

/**
 * Gets the user's OAuth 2.0 access token so that it can be passed to Picker.
 * This technique keeps Picker from needing to show its own authorization
 * dialog, but is only possible if the OAuth scope that Picker needs is
 * available in Apps Script. In this case, the function includes an unused call
 * to a DriveApp method to ensure that Apps Script requests access to all files
 * in the user's Drive.
 *
 * @return {string} The user's OAuth 2.0 access token.
 */
function getOAuthToken() {
  try {
    DriveApp.getRootFolder();
    return ScriptApp.getOAuthToken();
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log('Failed with error: %s', e.error);
  }
}