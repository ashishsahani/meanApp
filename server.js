var express = require ('express');
var morgan = require('morgan');
var app = express();
var port=process.env.PORT || 8000;
var mongoose=require('mongoose');
var bodyParser = require('body-parser');

var router= express.Router();

var appRoutes = require('./app/routes/api')(router);
var path = require('path');

mongoose.connect('mongodb://localhost:27017/tutorial',function(err){
	if (err) {
		console.log('Not Connected to the Database: '+ err);
	}else {
		console.log('Successfully connected to mongodb');
	}
})
// middle ware 
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));
// api router 
app.use('/api',appRoutes);



// path for the static content or web
app.get('*',function(req,res){
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
})

app.listen(port,function  () {
	console.log('Running on port '+port);
})