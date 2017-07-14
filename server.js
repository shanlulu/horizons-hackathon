const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var models = require('./models/models');
var ShelfItem = models.ShelfItem;
var ShopItem = models.ShopItem;

const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

// app.get('/test', function(req, res) {
//   new ShelfItem({
//     name: 'Shan',
//     date: 1500062828334,
//     category: 'hey'
//   }).save(function(err, item) {
//     if (err) console.log('ERROR', err);
//     else {
//       console.log('SAVED', item);
//       res.redirect('/fetch');
//     }
//   });
// })

app.get('/fetch', function(req, res) {
  var expired = [];
  var threeDay = [];
  var aWeek = [];
  var longer = [];
  ShelfItem.find(function(err, items) {
    if (err) console.log('ERROR', err);
    else {
      for (var item in items) {
        //var expiration = new Date(new Date().getTime() + item.date);
        var now = new Date().getTime();
        var expiration = items[item].date;
        console.log(typeof items[item].date);
        console.log(items[item].date);
        if (now >= expiration) expired.push(items[item]);
        else if (expiration - now <= 259200000) threeDay.push(items[item]);
        else if (expiration - now <= 604800000) aWeek.push(items[item]);
        else longer.push(items[item]);
      }
      console.log(expired, threeDay, aWeek, longer);
      res.json({
        expired: expired,
        threeDay: threeDay,
        aWeek: aWeek,
        longer: longer
      })
    }
  })
})

app.post('/remove/:fid', function(req, res) {
  ShelfItem.findById(req.params.fid, function(err, item) {
    if (err) console.log('ERROR', err);
    else {
      item.remove();
      res.status(200).json({ success: true });
    }
  })
})

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
