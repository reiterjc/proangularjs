// express stuff
var express = require('express');
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://test:pass@ds041150.mlab.com:41150/proangularjs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var Product = require('./Product.js');

router.use(function (req, res, next) {
    console.log('Something is happening');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function (req, res) {
    res.json({message: 'Hello World'});
});

router.route('/products')
    .get(function (req, res) {
        Product.find(function(err, products) {
            if (err) res.send(err);
            res.json(products);
        });
    })

    .post(function(req, res) {
        var product = new Product();
        product.category = req.body.category;
        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;

        product.save(function (err) {
            if (err) res.send(err);
            res.json({message: 'Product created!'});
        });
    });


app.use('/api', router);
app.listen(5500);
console.log('Server started');
