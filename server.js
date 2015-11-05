var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send("We're using Node.js to send this response");
});

app.listen(3000, function() {
	console.log('Listening');
});