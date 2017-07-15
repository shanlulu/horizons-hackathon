var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connect = process.env.MONGODB_URI;

// If you're getting an error here, it's probably because
// your connect string is not defined or incorrect.
mongoose.connect(connect);

// Step 1: Write your schemas here!
// Remember: schemas are like your blueprint, and models
// are like your building!

var itemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	category: String,
	date: Number,
	imageUrl: String
});

var shopSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	category: String,
	storage: Number,
	imageUrl: String
});

var categorySchema = new Schema({
	name: String,
	imageUrl: String,
	content: Object
})

// Step 2: Create all of your models here, as properties.
var ShelfItem = mongoose.model('ShelfItem', itemSchema);
var ShopItem = mongoose.model('ShopItem', shopSchema);
var Category = mongoose.model('Category', categorySchema);

// Step 3: Export your models object
module.exports = {
	ShelfItem: ShelfItem,
	ShopItem: ShopItem,
	Category: Category
}
