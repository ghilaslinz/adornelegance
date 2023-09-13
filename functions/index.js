const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51ILvzVF5Dv9OaLAwYv2GkVUxaB0Qjl8crn7YE2UJcLhP0iINfaTbxHkz5OuhDVabK8sMjchLnTIVhtahzBAOOQUj001joo5qBR",

);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: 'EUR',
        metadata: {integration_check: "accept_a_payment"},
    });
    console.log('Payment Intent Created:', paymentIntent);
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
    console.log('Client Secret Sent:', paymentIntent.client_secret);
} catch (error) {
    console.error('Error creating payment intent:', error); // <-- Log here
    response.status(500).send({ error: 'Error creating payment intent' });
}

});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api
