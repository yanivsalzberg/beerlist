var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var beerSchema = new Schema ({
  name: {type: String},
  style: {type: String},
  abv: {type: Number},
  image: {type: String}
})

var Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;