var mongoose = require('mongoose');
mongoose.connect('mongodb://test:pass@ds041150.mlab.com:41150/proangularjs');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    var productSchema = new mongoose.Schema({
        category: String,
        description: String,
        name: String,
        price: Number
    });

    var Product = mongoose.model('Products', productSchema, 'Products');

    Product.find(function (err, products) {
        if (!err) {
            console.log(products);
        } else {
            console.log(err);
        }
    });

    // var newProduct = new Product({category: 'chess', description: 'blah', name: 'somenewproduct', price: 20});
    // newProduct.save(function (err, product) {
    //     if (!err) {
    //         console.log("added: " + product);
    //     } else {
    //         console.log(err);
    //     }
    // });
});