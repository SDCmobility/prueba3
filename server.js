var express  = require('express'),
	app		 = express(),
	http	 = require("http"),
	server	 = http.createServer(app),
	mongoose = require('mongoose');

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/', function(req, res) {
	res.send('Hola, Mundo!');
});

routes = require('./routes/routes')(app);

mongoose.connect('mongodb://localhost/routes', function(err, res) {
	if(err) {
		console.log('ERROR: Conectando a la BD: ' + err);
	} else {
		console.log('Conexion a la BD realizada');	
	}
});

server.listen(3000, function() {
	console.log("Node server running on http://localhost:3000");
});