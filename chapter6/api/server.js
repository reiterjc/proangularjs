// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express

var port = process.env.PORT || 5500;        // set our port

// database stuff
var MongoClient = require('mongodb').MongoClient;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});
});

// more routes for our API will happen here

router.route('/products')
    .get(function (req, res) {


        MongoClient.connect('mongodb://test:pass@ds041150.mlab.com:41150/proangularjs', function(err, db) {
            if (err) {
                throw err;
            }
            db.collection('products').find().toArray(function(err, result) {
                if (err) {
                    throw err;
                }
                res.json(result);
            });
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
