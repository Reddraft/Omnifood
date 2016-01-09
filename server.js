var express = require('express');
var app = express();


app.use(express.static( __dirname + '/'));


app.listen(5000);

console.log('Express listening on port 5000');