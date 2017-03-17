const mongoose = require('mongoose');

// this is our schema to represent a restaurant
const cheeseSchema = mongoose.Schema({
  type: [String]
})


// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const Cheese = mongoose.model('Cheese', cheeseSchema);

module.exports = {Cheese};
