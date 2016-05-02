var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    category: String,
    description: String,
    name: String,
    price: Number
});

module.exports = mongoose.model('Products', ProductSchema, 'Products');