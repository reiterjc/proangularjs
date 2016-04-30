// express stuff
var express = require('express');
var app = express();
var router = express.Router();

// database stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://test:pass@ds041150.mlab.com:41150/proangularjs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var ProductModel = require('./Product.js');

router.use(function (req, res, next) {
    console.log('Something is happening');
    next();
});

router.get('/', function (req, res) {
    res.json({message: 'Hello World'});
});

router.route('/products')
    .get(function (req, res) {
        ProductModel.find(function(err, products) {
            if (err) res.send(err);
            res.json(products);
        });
    });


app.use('/api', router);
app.listen(5500);
console.log('Server started');
