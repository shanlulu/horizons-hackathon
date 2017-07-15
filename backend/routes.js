const express = require('express');
const router = express.Router();
var models = require('../models/models');
var ShelfItem = models.ShelfItem;
var ShopItem = models.ShopItem;
var request = require('request');

// YOUR API ROUTES HERE

// SAMPLE ROUTE
// router.get('/login', (req, res) => {
//     res.render('login.hbs');
// });

// router.get('/shop', (req, res) => {
//   ShopItem.find(function(err, items) {
//     if (err) console.log('ERR', err);
//     else {
//       res.render('shop.hbs', {
//         shopItems: items
//       });
//     }
//   })
// })

router.get('/fetchShop', function(req, res) {
  ShopItem.find(function(err, items) {
    if (err) console.log('ERROR', err);
    else {
      res.json(items);
    }
  })
})

router.get('/fetch', function(req, res) {
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
        var dateObj = new Date(items[item].date);
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

router.post('/remove', function(req, res) {
  ShelfItem.findById(req.body.id, function(err, item) {
    if (err) console.log('ERROR', err);
    else {
      item.remove();
      res.status(200).json({ success: true });
    }
  })
})

router.post('/save', function(req, res){
	if (!req.body.name) console.log("Item name required");
	new ShelfItem({
		name: req.body.name,
		category: req.body.category,
		date: new Date(req.body.date).getTime(),
		imageUrl: req.body.imageUrl
	}).save(function(err){
    if(err){
      console.log("Error saving to database", err);
    } else {
      res.json({success: true})
    }
	})
});

router.post('/saveFromShop', function(req, res){
	ShopItem.findById(req.body.id).exec()
		.then(function(resp){
			new ShelfItem({
				name: resp.name,
				category: resp.category,
				date: resp.storage + (new Date().getTime()),
				imageUrl: resp.imageUrl
			}).save(function(err){
				if(err){
          console.log("Error saving to database", err)
        } else {
          res.json({success: true})
        }
			});
		})
});

router.post('/saveToShop', function(req, res){
  ShelfItem.findById(req.body.id).exec()
    .then(function(resp){
      new ShopItem({
        name: resp.name,
        category: resp.category,
        storage: resp.date - (new Date().getTime()),
        imageUrl: resp.imageUrl
      }).save(function(err){
        if(err){
          console.log("Error saving to database", err)
        } else {
          res.json({success: true})
        }
      });
    })
});

router.get('/recipes', function(req, res){
  ShelfItem.find().exec()
    .then(function(resp){
      var arr = resp.map((item) => (item.name));
      return arr;
    })
    .catch(function(err) {
      console.log("Error caught", err)
    })
    .then(function(arr){
      var kitchenString = arr.join(',');
      // var options = {
      //   url: 'http://www.supercook.com/dyn/results',
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   form: {
      //     needsimage: "1",
      //     kitchen: kitchenString,
      //     focus: "",
      //     kw: "",
      //     catname: ",",
      //     exclude: "",
      //     start: "0"
      //   }
      // };
      //request(options, function(error, response, body){
        res.render('testpage', {
          kitchenString: kitchenString
        });
       //   recipes: response
      //  })
     // })
      // $.ajax({
      //   url: 'http://www.supercook.com/dyn/results',
      //   method: 'post',
      //   data: {
      //     needsimage: "1",
      //     kitchen: kitchenString,
      //     focus: "",
      //     kw: "",
      //     catname: ",",
      //     exclude: "",
      //     start: "0"
      //   },
      //   success: function(resp){
      //     var results = resp.responseJSON.results;
      //     res.respond({recipes: results});
      //   },
      //   error: function(err){
      //     console.log("Failure getting recipes");
      //   }
      // });
    })
})


module.exports = router;
