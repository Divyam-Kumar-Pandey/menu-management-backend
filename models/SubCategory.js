const mongoose = require("mongoose");
const {schema} = require("./Item");

const SubCategorySchema = new mongoose.Schema({
  categoryId: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true},
  name: {type: String, required: true, unique: true},
  image: {type: String},
  description: {type: String},
  taxApplicable: {type: Boolean, default: false},
  tax: {
    type: Number,
    default: 0
  },
  timestamps: true
});

SubCategorySchema.pre("save", async function (next) {
  console.log("Pre save hook");
  console.log(this.categoryId);
  this.taxApplicable = this.categoryId.taxApplicable;
});

module.exports = mongoose.model("SubCategory", SubCategorySchema);
