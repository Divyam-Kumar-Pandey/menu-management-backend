const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

exports.createSubCategory = async (req, res) => {
  try {
    const { categoryId, name, image, description, taxApplicable, tax } = req.body;

    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });

    const subCategory = new SubCategory({ categoryId, name, image, description, taxApplicable, tax });
    await subCategory.save();

    res.status(201).json({ success: true, message: 'Sub-category created', data: subCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json({ success: true, data: subCategories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory) return res.status(404).json({ success: false, message: 'Sub-category not found' });

    res.status(200).json({ success: true, data: subCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getSubCategoriesByCategory = async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ categoryId: req.params.categoryId });
    res.status(200).json({ success: true, data: subCategories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedSubCategory) return res.status(404).json({ success: false, message: 'Sub-category not found' });

    res.status(200).json({ success: true, message: 'Sub-category updated', data: updatedSubCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    const deletedSubCategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!deletedSubCategory) return res.status(404).json({ success: false, message: 'Sub-category not found' });

    res.status(200).json({ success: true, message: 'Sub-category deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
