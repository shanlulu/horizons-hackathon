const path = require('path');
const express = require('express');
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

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

app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
