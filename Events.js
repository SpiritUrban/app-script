//**************************************** Events ***************************************** */

function onEdit(e) {
  // Set a comment on the edited cell to indicate when it was changed.
  var range = e.range;
  range.setNote('Last modified: ' + new Date());
  toast(JSON.stringify(e))
}

/**
 * The event handler triggered when the selection changes in the spreadsheet.
 * @param {Event} e The onSelectionChange event.
 * @see https://developers.google.com/apps-script/guides/triggers#onselectionchangee
 */
function onSelectionChange(e) {
  // write(1, 1, JSON.stringify(e))
  write(1, 1, Math.random());
  toast('SelectionChange');

  // SpreadsheetApp.getActive().toast(123);
  // Logger.log('Change!');

  // Set background to red if a single empty cell is selected.
  const range = e.range;
  if (range.getNumRows() === 1 &&
    range.getNumColumns() === 1 &&
    range.getCell(1, 1).getValue() === '') {
    range.setBackground('red');
  };

}