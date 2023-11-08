const { Product } = require('../models');

const productData = [
  {
    product_name: 'Blue Mini Dress',
    price: 79.00,
    stock: 23,
    category_id: 1,
  },
  {
    product_name: 'Graphic T-Shirt',
    price: 15.99,
    stock: 78,
    category_id: 1,
  },
  {
    product_name: 'Blue Blossom Cardigan',
    price: 69.99,
    stock: 33,
    category_id: 2,
  },
  {
    product_name: 'Sports Bra',
    price: 45.00,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: 'Tall Snow Boot',
    price: 99.99,
    stock: 20,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
