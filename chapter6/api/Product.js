var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    category: String,
    description: String,
    name: String,
    price: Number
});

module.exports = mongoose.model('Products', productSchema, 'Products');