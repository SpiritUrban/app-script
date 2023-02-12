//**************************************** General ***************************************** */

// 1
function write(y, x, data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = sheet.getRange(y, x);
  cell.setValue(data);
}

// 2
function writeMultiple(y, x, yy, xx, data) {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet
    .getRange(y, x, yy, xx)  // coordinates
    .setValues(data)         // data
    .setBackground('beige'); // color marking
  SpreadsheetApp.flush();
}

// 3
function getOneValue(cell = 'A1') {
  var sheet = SpreadsheetApp.getActiveSheet();
  var value = sheet.getRange(cell).getValue();
  return value;
}

// 4
function toast(msg) {
  SpreadsheetApp.getActive().toast(msg);
}

// 5
function alert(msg) {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
    .alert(msg);
}