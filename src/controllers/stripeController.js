// paymentController.js


const stripe = require('stripe')('sk_test_51NxaYkEuDioAacdGvImxebKx7BbeoffDtWFs1ZZ5NQetAA6BqxF9vgnYD6iqkTuNC3eocbc0XZf3jlWHbMsKDEhw00JTeFQJQ7');

async function createPaymentSheet(req, res) {
  try {
    const { amount, currency } = req.body;
    console.log("req.body", req.body);

    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: '2023-08-16' }
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
      customer: customer.id,
      payment_method_types: ['card'],
    });

    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  } catch (error) {
    console.error("Error creating payment sheet:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createPaymentSheet,
};
