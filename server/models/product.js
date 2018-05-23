var mongoose =require('mongoose');

let ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'title is required'],
    minlength: [3, "Name must be at least 3 characters."]
  },
  qty: {
    type: Number,
    required: [true, 'description is required']
  },
  price: {
    type: Number,
    required: [true, 'must be true or false']
  }
}, {timestamps: true});
module.exports = mongoose.model('Product', ProductSchema)
