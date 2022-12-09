const express = require('express');
const controller = require('../controller/bookController');

const router = express.Router();

router.get('/book/create/:id', controller.create);
router.post('/book/create/:id', controller.createPost);
router.get('/book/view/:id', controller.bookview);

router.get('/cab/payment/:id', controller.payment);
router.get('/cab/payment/success/:id', controller.success);

router.get('/book/paymentInvoice/:id', controller.paymentInvoice);
// router.post('/book/update/:id', controller.updatePost);
// router.get('/book/delete/:id', controller.delete);
module.exports = router;
