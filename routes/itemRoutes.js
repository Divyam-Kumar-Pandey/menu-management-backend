const express = require('express');
const { 
  createItem, 
  getItems, 
  getItemById, 
  getItemsByCategory, 
  getItemsBySubCategory, 
  searchItems, 
  updateItem, 
  deleteItem 
} = require('../controllers/itemController');

const router = express.Router();

router.post('/', createItem);
router.get('/', getItems);
router.get('/search', searchItems); // this is placed above /:id to avoid conflict
router.get('/:id', getItemById);
router.get('/category/:categoryId', getItemsByCategory);
router.get('/subcategory/:subCategoryId', getItemsBySubCategory);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
