let Product = require('../models/product');
module.exports = {
  index: (req, res) => {
    Product.find({}, (err, products) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(products);
    });
  },
  create: (req, res)=> {
    const product = new Product(req.body);

    product.save( (err) =>  {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(product);
    });
  },
  show: (req, res)=> {
    Product.find({_id: req.params.id}, (err, product) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(product);
    });
  },
  update: (req, res)=> {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, product) => {
      if (err){
        return res.status(400).json(err);
      }
      return res.json(product);
    });
  },
  destroy: (req, res)=> {
    Product.remove({_id: req.params.id}, (err) => {
    if (err){
      return res.status(400).json(err);
    }
    return res.json('successfully deleted');
  });
  },
}
