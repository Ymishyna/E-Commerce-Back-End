const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Dresses',
  },
  {
    category_name: 'Tops',
  },
  {
    category_name: 'Sweaters',
  },
  {
    category_name: 'Activewear',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
