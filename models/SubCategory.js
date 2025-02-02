  const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  name: { type: String, required: true, unique: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean, default: function() {
    if (this.categoryId && this.categoryId.taxApplicable) {
      return this.categoryId.taxApplicable;
    }
    return false;
  } },
  tax: {
    type: Number,
    default: function () {
      if (this.taxApplicable && this.categoryId && this.categoryId.tax) {
        return this.categoryId.tax;
      }
      return 0;
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('SubCategory', SubCategorySchema);
