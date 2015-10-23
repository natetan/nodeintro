var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send("Running Node backend")
});

app.listen(3000, function() {
	console.log('Listening');
});