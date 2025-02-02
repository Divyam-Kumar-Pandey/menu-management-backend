const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', default: null },
  name: { type: String, required: true, unique: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { 
    type: Boolean,
    default: function() {
      if (this.subCategoryId && this.subCategoryId.taxApplicable) {
        return this.subCategoryId.taxApplicable;
      } else if (this.categoryId && this.categoryId.taxApplicable) {
        return this.categoryId.taxApplicable;
      }
      return false;
    }
  },
  tax: { 
    type: Number,
    default: function() {
      if (this.taxApplicable && this.subCategoryId && this.subCategoryId.tax) {
        return this.subCategoryId.tax;
      } else if (this.taxApplicable && this.categoryId && this.categoryId.tax) {
        return this.categoryId.tax;
      }
      return 0;
    }
  },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number }
}, { timestamps: true });

ItemSchema.pre("save", function (next) {
  this.totalAmount = this.baseAmount - this.discount;
  next();
});

module.exports = mongoose.model('Item', ItemSchema);
