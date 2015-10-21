var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var GroceryItem = require("./models/GroceryItem.js")

require('babel/register');

require("./database.js");

app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: false
}));


app.get('/', function(req, res) {
	//res.render('./../app/index.ejs', {});
	var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));
	GroceryItem.find(function(err, doc) {
		var generated = ReactDOMServer.renderToString(application({
			items: doc,

		}));

		res.render('./../app/index.ejs',{reactOutput: generated});
	});

});

require('./routes/items')(app);


app.use(express.static(__dirname + '/../.tmp'));

app.listen(7777, function() {
	console.log('listening');
});