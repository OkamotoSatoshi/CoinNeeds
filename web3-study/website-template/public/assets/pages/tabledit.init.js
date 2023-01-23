
/*
Template Name: Zoter - Bootstrap 4 Admin Dashboard
 Author: Mannatthemes
 Website: www.mannatthemes.com
 File: Tabledit init js
 */

$('#my-table').Tabledit({
    columns: {
      identifier: [0, 'id'],                    
      editable: [[1, 'col1'], [2, 'col1'], [3, 'col3']]
    }
  });

$('#mainTable').editableTableWidget().numericInputExample().find('td:first').focus();
