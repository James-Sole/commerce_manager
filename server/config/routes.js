var path = require('path'),
  products = require('../controllers/products');

module.exports = (app) => {
  app.get('/products', products.index);
  app.post('/products', products.create);
  app.get('/products/:id', products.show);
  app.patch('/products/:id', products.update);
  app.delete('/products/:id', products.destroy);

  app.all('*', (req, res, next)=> {
    res.sendFile(path.resolve('./client/dist/client/index.html'))
  });
}
