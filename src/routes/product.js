const express = require("express");
const { addCategory, getCategories } = require("../controller/category");
const { requireSignin, adminMiddleware } = require("../middleware");
const {
  createProduct,
  getProducts,
  getProductsBySlug,
  getProductDetailsById,
  deleteProductById,
} = require("../controller/product");
const multer = require("multer");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname + Date.now);
  },
});

const upload = multer({ storage });

router.post(
  `/product/create`,
  requireSignin,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct
);
router.get(`/products/:slug`, getProductsBySlug);
// router.get('/category/getcategory', getCategories);
router.get(`/product/:productId`, getProductDetailsById);
router.delete(
  `/product/deleteProductById`,
  requireSignin,
  adminMiddleware,
  deleteProductById
);
router.post(
  `/product/getProducts`,
  requireSignin,
  adminMiddleware,
  getProducts
);

module.exports = router;
