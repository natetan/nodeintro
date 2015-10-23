var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send("This is an example of running Node as a backend");
});

app.listen(3000, function() {
	console.log('Listening');
});