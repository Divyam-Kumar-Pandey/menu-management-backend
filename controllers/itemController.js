const Item = require('../models/Item');

// Create an item
exports.createItem = async (req, res) => {
  try {
    const { categoryId, subCategoryId, name, image, description, taxApplicable, tax, baseAmount, discount } = req.body;

    const item = new Item({ categoryId, subCategoryId, name, image, description, taxApplicable, tax, baseAmount, discount });
    await item.save();

    res.status(201).json({ success: true, message: 'Item created', data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Item not found' });

    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Search items by name
exports.searchItems = async (req, res) => {
  try {
    const items = await Item.find({ name: { $regex: req.query.name, $options: 'i' } });
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ success: false, message: 'Item not found' });

    res.status(200).json({ success: true, message: 'Item updated', data: updatedItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
