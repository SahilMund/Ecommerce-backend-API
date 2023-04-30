const Product = require("../models/Product");

// responsible for adding a new product
module.exports.addProduct = async (req, res) => {
  const { name, description, category } = req.body;

  // Validate required field details
  if (!name || !description || !category) {
    return res.status(206).json({
      message: "Name, description and category field should not be empty",
      success: false,
    });
  }

  // To check whether the entered category is present or not
  let isExists = await Product.findOne({ name: name });

  if (isExists) {
    return res.status(405).json({
      data: isExists,
      message: "Product already Exists.",
      success: false,
    });
  }

  try {
    await Product.create(req.body);

    // sending the response
    return res.status(200).json({
      message: "Product Added Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// responsible for fetching all products
module.exports.fetchProduct = async (req, res) => {
  try {
    const products = await Product.find({}).populate("category");

    // If no products are present
    if (products && products.length === 0) {
      return res.status(200).json({
        message: "No Product Present",
        success: true,
        data: products,
      });
    }

    return res.status(200).json({
      message: "Products Fetched Successfully",
      success: true,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// responsible for updating the product details
module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category } = req.body;

    await Product.updateOne(
      { _id: id },
      { $set: { name, description, category } }
    );

    return res.status(200).json({
      message: "Product details updated Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// responsible for deleting a product
module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    // To prevent DB calls if clicked on the request multiple time
    if (!deletedProduct) {
      return res.status(500).json({
        message: "Product already removed",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Product removed Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

// responsible for fetching products by a particular category also implemented pagination
module.exports.fetchProductByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Getting limit and page data from querystring
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);

    // defining skip limit by the below logic
    const skip_limit = limit * (page - 1);

    const products = await Product.find({ category: categoryId })
      .populate("category")
      .skip(skip_limit)
      .limit(limit);

    //   If no products are present under this category
    if (products && products.length === 0) {
      return res.status(200).json({
        message: "No Product Present Under the selected category",
        success: true,
        data: products,
      });
    }

    return res.status(200).json({
      message: "Product fetched by Category Successfully",
      success: true,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
