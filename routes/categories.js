const express = require("express");
const router = express.Router();

const { categoryController } = require("../controllers");

// This route handles the HTTP POST request to add a new category.
router.post("/add", categoryController.addCategory);

// This route handles the HTTP GET request to fetch all categories.
router.get("/fetch-all", categoryController.fetchCategory);

// This route handles the HTTP PUT request to update an existing category by ID.
router.put("/update/:id", categoryController.updateCategory);

// This route handles the HTTP DELETE request to delete an existing category by ID.
router.delete("/delete/:id", categoryController.deleteCategory);

module.exports = router;
