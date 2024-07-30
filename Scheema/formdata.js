const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
  Name:String,
  Email : String,
  destination : String,
  company : String,
  number : String,
  industry : String,
  service : String,
  message : String,
  });

module.exports = mongoose.model('Order', OrderSchema);

