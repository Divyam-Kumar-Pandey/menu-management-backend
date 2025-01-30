const express = require('express');
const { 
  createSubCategory, 
  getSubCategories, 
  getSubCategoryById, 
  getSubCategoriesByCategory, 
  updateSubCategory, 
  deleteSubCategory 
} = require('../controllers/subCategoryController');

const router = express.Router();

router.post('/', createSubCategory);
router.get('/', getSubCategories);
router.get('/:id', getSubCategoryById);
router.get('/category/:categoryId', getSubCategoriesByCategory);
router.patch('/:id', updateSubCategory);
router.delete('/:id', deleteSubCategory);

module.exports = router;
