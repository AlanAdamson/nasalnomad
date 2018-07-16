var express = require('express');
var app = module.exports = express();
var path = require('path');

var addition = 1 + 1;
console.log('Addition test ran and 1+1=' + addition);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + './index.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
