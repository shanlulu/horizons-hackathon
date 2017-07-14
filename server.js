const path = require('path');
const express = require('express');
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

var models = require('./models/models');
var ShelfItem = models.ShelfItem;
var ShopItem = models.ShopItem;

const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.post('/save', function(req, res){
	if (!req.body.name) console.log("Item name required");
	new ShelfItem({
		name: req.body.name,
		category: req.body.category,
		date: req.body.date.getTime(),
		imageUrl: req.body.imageUrl
	}).save(function(err){
		console.log("Error saving to database", err);
	})
	.then(res.respond({success: true}))
});

app.post('/save/:shopItemId', function(req, res){
	ShopItem.findById(req.params.shopItemId).exec()
		.then(function(resp){
			new ShelfItem({
				name: resp.name,
				category: resp.category,
				date: resp.storage + (new Date().getTime()),
				imageUrl: resp.imageUrl
			}).save(function(err){
				console.log("Error saving to database", err);
			});
		})
		.then(res.respond({success: true}))
});

app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
