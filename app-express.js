var express = require('express');
var app = express();

app.get('/', function (req,res){
	//res.sendFile('templates/index.html',{root: __dirname});
	res.status(200).send('Hello World from Mexpress');
});

app.listen(8888);