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

app.use('/', api);
app.get('/*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});


app.listen(PORT, error => {
    error
        ? console.error(error)
        : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
