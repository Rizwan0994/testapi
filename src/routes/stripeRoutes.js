// routes.js

const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/stripeController');

// Define the '/payment-sheet' route
router.post('/payment-sheet', paymentController.createPaymentSheet);

module.exports = router;
