const express = require("express");
const router = express.Router();

// to handle products related requests
router.use("/products", require("./products"));
// to handle category related requests
router.use("/categories", require("./categories"));

// To handle bad end-points
router.use("*", (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "The Route that you are trying to access is not found",
  });
});

module.exports = router;
