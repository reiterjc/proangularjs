var mongoose = require('mongoose');
mongoose.connect('mongodb://test:pass@ds041150.mlab.com:41150/proangularjs');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    var productSchema = new mongoose.Schema({
        _id: String,
        category: String,
        description: String,
        name: String,
        price: Number
    });

    var Product = mongoose.model('Product', productSchema);

    Product.find(function (err, products) {
        if (!err) {
            console.log(products);
        } else {
            console.log(err);
        }
    });

    // var newProduct = new Product({name: "somenewproduct"});
    // newProduct.save(function (err, product) {
    //     if (err) return console.error(err);
    // });
});