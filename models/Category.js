const mongoose = require("mongoose");

// Defining a schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Creating Category Model using the Category schema
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
