import express from 'express';
import { listen as listenPost } from './server/control/PostControl.js';

var app = express();

// app.use('/static', express.static('public'));
app.use(function(req, res, next) {
	console.log(JSON.stringify(req.cookies));
	next();
});

app.get('/', function(req, res) {
	res.sendFile('/static/index.html');
});

app.get('/*.html', function (req, res) {
	var reqUrl = req.url;
	var pathName = reqUrl.pathname;
	res.sendFile("/"+pathName);
});

listenPost(app);

app.listen('8000', function() {
	console.log('Server is listening');
});
