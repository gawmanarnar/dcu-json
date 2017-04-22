var gsjson = require('google-spreadsheet-to-json');
var fs = require('fs');

gsjson({
    spreadsheetId: '1-Zta88-gwpcQSnXe5E5kUHv9TSVnPQvbldtFGCnjzcM',
})
.then(function(result) {
  fs.writeFile('data.json', JSON.stringify(result), function(err) {
    if(err) throw err;
  })
})
.catch(function(err) {
    console.log(err.message);
    console.log(err.stack);
});
