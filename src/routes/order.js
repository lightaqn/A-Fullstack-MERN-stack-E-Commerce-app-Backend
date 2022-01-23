const { requireSignin, userMiddleware } = require("../middleware");
const { addOrder, getOrders, getOrder } = require("../controller/order");
const router = require("express").Router();

router.post(`/addOrder`, requireSignin, userMiddleware, addOrder);
router.get(`/getOrders`, requireSignin, userMiddleware, getOrders);
router.get(`/getOrder`, requireSignin, userMiddleware, getOrder);

module.exports = router;