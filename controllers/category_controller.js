const Category = require("../models/Category");
const Product = require("../models/Product");

// responsible for adding a new category and sending an appropriate response back to the client.
module.exports.addCategory = async (req, res) => {
  const { name, description } = req.body;

  // Validate the required fields
  if (!name || !description) {
    return res.status(206).json({
      message: "Name or description field should not be empty",
      success: false,
    });
  }

  // To check whether the entered category is present or not
  let isExists = await Category.findOne({ name: name });

  if (isExists) {
    return res.status(405).json({
      data: isExists,
      message: "Category already Exists.",
      success: false,
    });
  }

  try {
    //  If the above checks are done, then we are good to proceed further
    await Category.create(req.body);

    // sending the response
    return res.status(200).json({
      message: "Category Added Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// responsible for fetching all the categories
module.exports.fetchCategory = async (req, res) => {
  try {
    const data = await Category.find({});

    // If there is no category present
    if (data && data.length === 0) {
      return res.status(200).json({
        message: "No Category Details Present",
        success: true,
        data,
      });
    }

    return res.status(200).json({
      message: "Category Details Fetched Successfully",
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// This controller will receive categoryId and responsible for updating that category details
module.exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    await Category.updateOne({ _id: id }, { $set: { name, description } });

    return res.status(200).json({
      message: "Category details updated Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// responsible for deleting a category and the products that are present under it
module.exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await Product.deleteMany({ category: id });
    await Category.findByIdAndRemove(id);

    return res.status(200).json({
      message:
        "Category and products present under this category removed Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
