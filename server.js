var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use('/api/posts', require('./controllers/api/posts'));
app.use('/', require('./controllers/static'));

app.listen(3000, function () {
	console.log('server listening on', 3000)
});