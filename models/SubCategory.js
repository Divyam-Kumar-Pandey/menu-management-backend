const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  name: { type: String, required: true, unique: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean },
  tax: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('SubCategory', SubCategorySchema);
