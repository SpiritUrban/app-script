//************************************** HTML Page ******************************************* */

/**
 * Like routes for the GET requests
 */
function doGet() {
  return HtmlService.createTemplateFromFile("__Index")
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  // second variant to get the page
  return HtmlService.createHtmlOutputFromFile("Index");
}

function doSomething() {
  Logger.log("I was called!");
}

/**
 * Get the several values from the cells
 */
function getValues() {
  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
  var temp = activeSheet.getRange("A1:C1").getValues();
  return temp;
}

/**
 * And revrite the values
 */
function editCurrentCells(form) {
  var row = [form.a1, form.b1, form.c1];
  writeMultiple(1, 1, 1, 3, [row]);
}

/**
 * Write data from the Form to sheet (from top to down)
 */
function appendRowFromFormSubmit(form) {
  var row = [form.firstName, form.lastName, form.department];
  SpreadsheetApp.getActiveSheet().appendRow(row); // просто по порядку (в ряди, зверху в низ) вставляє інфу в ячейки
}
