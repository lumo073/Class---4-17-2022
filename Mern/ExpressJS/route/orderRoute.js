const express = require('express')
const { placeOrder, viewOrders, orderDetails, userOrders, findOrderByStatus, updateOrder, deleteOrder } = require('../controller/orderColntoller')
const router = express.Router()

router.post('/placeorder', placeOrder)
router.get('/orderlist', viewOrders)
router.get('/orderdetails/:order_id', orderDetails)
router.get('/userorder/:user_id', userOrders)
router.post('/findorderbystatus', findOrderByStatus)
router.put('/updateorder/:id',updateOrder)
router.delete('/deleteorder/:id',deleteOrder)

module.exports = router