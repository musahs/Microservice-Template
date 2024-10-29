const express = require("express");
const router = express.Router();
const { dummyController /* , dummyController2, dummyController3 */ } = require("../controllers");
const { authMiddleware /* , middleware2, middleware3 */ } = require("../middlewares");

// router.use(authMiddleware.verifyToken, authMiddleware.verifyFarmer);
router.get("/", dummyController.dummyFunction);

module.exports = router;
