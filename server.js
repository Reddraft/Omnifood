var express = require('express');
var app = express();


//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname, '/'));



app.listen(5000);

console.log('Express listening on port 5000');