const express = require('express');
const router = express.Router();
var models = require('../models/models');
var ShelfItem = models.ShelfItem;
var ShopItem = models.ShopItem;
var Category = models.Category;
var request = require('request');

// YOUR API ROUTES HERE

// SAMPLE ROUTE
// router.get('/login', (req, res) => {
//     res.render('login.hbs');
// });

router.get('/build', function(req, res) {
  res.render('build');
})

router.post('/build', function(req, res) {
  new Category({
    name: req.body.name,
    imageUrl: req.body.image,
    content: []
  }).save(function(err, cat) {
    if (err) console.log(err);
    else (res.redirect('/build'));
  })
})

router.get('/categories/:category', function(req, res) {
  ShopItem.find({category: req.params.category}, function(err, items) {
    if (err) console.log('ERR', err);
    else {
      res.render('shop', {
        category: req.params.category[0].toUpperCase() + req.params.category.slice(1),
        shopItems: items
      })
    }
  })
})

router.get('/categories', function(req, res) {
  Category.find(function(err, cats) {
    if (err) console.log('ERR', err);
    else {
      res.render('categories', {
        category: 'Categories',
        categories: cats
      })
    }
  })
})

router.get('/home', (req, res) => {
  ShelfItem.find(function(err, items) {
    if (err) console.log('ERR', err);
    else {
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
          res.render('fridge', {
            expired: expired,
            threeDay: threeDay,
            aWeek: aWeek,
            longer: longer
          })
        }
      })
    }
  })
})


router.get('/shop', (req, res) => {
  ShopItem.find(function(err, items) {
    if (err) console.log('ERR', err);
    else {
      res.render('shop.hbs', {
        category: "ALL",
        shopItems: items
      });
    }
  })
})

router.get('/shop/:category', (req, res) => {
  ShopItem.find({category: req.params.category}, function(err, items) {
    if (err) console.log('ERR', err);
    else {
      res.render('shop.hbs', {
        category: category,
        shopItems: items
      });
    }
  })
})

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
  ShopItem.findOne({name: req.body.name})
  .exec()
  .then(resp=>{
    console.log("response!!!!!saving!!!!",resp)
      new ShelfItem({
        name: resp.name,
        category: resp.category,
        date: new Date(req.body.date).getTime(),
        imageUrl: resp.imageUrl
      }).save(function(err,resp){
        if(err){
          console.log("Error saving to database", err);
        } else {
          res.json({id: resp.id})
        }
      })
    })
    // else {
    // }
  .catch(err => {
    console.log(err)
    new ShelfItem({
      name: req.body.name,
      category: req.body.category,
      date: new Date(req.body.date).getTime(),
      imageUrl: req.body.imageUrl
    }).save(function(err,resp){
      if(err){
        console.log("Error saving to database", err);
      } else {
        res.json({id: resp.id})
      }
    })
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

router.post('/saveFromShopExpress/:itemId', function(req, res){
	ShopItem.findById(req.params.itemId).exec(function(err, resp){
      if (err) console.log(err);
      else {
        new ShelfItem({
  				name: resp.name,
  				category: resp.category,
  				date: resp.storage + (new Date().getTime()),
  				imageUrl: resp.imageUrl
  			}).save(function(err, item){
  				if(err){
            console.log("Error saving to database", err)
          } else {
            console.log('SAVED', item);
            // ("1").insertBefore($('.btn-info'));
            res.redirect('/shop');
          }
  			});
      }
		})
});

router.post('/saveToShop', function(req, res){
  ShelfItem.findById(req.body.id).exec()
    .then(function(resp){
      //check if inside Shop before creating new item
      ShopItem.findOne({name:resp.name}).exec()
      .then(function(response){
        if(respnse.name){
          res.json({success:true})
        }
        else{
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
        }
      })

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
        res.render('testpage', {
          kitchenString: kitchenString
        });
    })
})

router.get('/logout', function(req, res){
  res.redirect('/login');
})


module.exports = router;
