var express = require('express');
var app = express();

app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));


app.listen(8080,function(err,server) {
	if(err){
		console.log(err)
	}
	console.log("Server running on 8080");
})