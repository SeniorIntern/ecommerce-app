const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JAd0aKGRg4eqambHjg7zMTKq7R6KczfsdUvphzdwW9c4zyJNDjW8ynQhKzJFUW7w8o2cxTQe00F7SuAZbSSdpL900WO3ODfHp"
);

// API

// APP config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));  // debug trick

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  // debug trick. should appear in browser's console when payment system works
  console.log("Payment Request Received DAMNN >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //   code 201   :   ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/happy-body-2cedf/us-central1/api
