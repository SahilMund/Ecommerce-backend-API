const express = require("express");
const router = express.Router();

const { productController } = require("../controllers");

// This route handles the HTTP POST request to add a new product under a category.
router.post("/add", productController.addProduct);

// This route handles the HTTP GET request to fetch all products.
router.get("/fetch-all", productController.fetchProduct);

// This route handles the HTTP GET request to fetch products according to a particular category.
router.get("/category/:categoryId", productController.fetchProductByCategory);

// This route handles the HTTP PUT request to update an existing product by ID.
router.put("/update/:id", productController.updateProduct);

// This route handles the HTTP DELETE request to delete an existing product by ID.
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
