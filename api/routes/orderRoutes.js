const express = require('express');
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');

const router = express.Router();

router.route('/new-order').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/my-orders').get(isAuthenticatedUser, myOrders);
router
  .route('/admin/orders')
  .get(isAuthenticatedUser, authorizedRoles('admin'), getAllOrders);
router
  .route('/admin/order/:id')
  .put(isAuthenticatedUser, authorizedRoles('admin'), updateOrder)
  .delete(isAuthenticatedUser, authorizedRoles('admin'), deleteOrder);

module.exports = router;
