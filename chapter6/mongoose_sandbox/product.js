// import into mongo with
//  mongoimport -h ds041150.mlab.com:41150 -d proangularjs -c products -u test -p test --file api/app/models/data.json --jsonArray

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    _id: String,
    name: String,
    description: String,
    category: String,
    price: Number
});

module.exports = mongoose.model('Product', ProductSchema);