const express = require('express');
const router = express.Router();
const { isAuthenticatedUser,authorizeRoles} = require('../middleware/auth');
const { getAll,createProduct,updateProduct,deleteProduct, getProductDetails } = require('../controllers/productControllers');


//ALL PRODUCT ROUTES
router.route("/products").get(getAll); 
router.route("/admin/products/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);
router.route("/admin/products/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct);
router.route("/admin/products/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);
router.route("/products/:id").get(getProductDetails);
module.exports = router;