import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  // For stripe states i.e. disable and error
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  // runs when payment component loads or when vairable inside bracket changes
  useEffect(() => {
    // Generate special stripe secret
    const getClientSecret = async () => {
      // axios is use to make get/post request.
      const response = await axios({
        method: "post",
        // Stripe expects the total in currency subunits. Equal to same amount in any currency.
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  // just for debugging in console
  console.log("The Secret is >>>", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent from refreshing
    setProcessing(true); // prevent multiple click on "Buy Now" button

    // Stripe setup
    // confirming
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
        // then : after finishing(response)
        // paymentIntent  : payment confirmation
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        // after payment completion ->  push into db
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        dispatch({
          type: "EMPTY_BASKET",
        });

        // stop user comming back to payment page. redirect to orders page after payment completion
        history.replace("/orders");
      });
  };

  // listen for event
  const handleChange = (event) => {
    // listen for changes in the cardElement and display errors for invalid card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* payment section (deliver address, review, & payment methods) */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Archalbot</p>
            <p>Pokhara-2,Archalbot</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Your Items</h3>
          </div>
          <div className="payment__items">
            {/* for every single item inside the basket return the checkout component */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            {/* stripe setup */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                  <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  {/* if its processing say processing or else say "Buy Now" */}
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* incase the card details is invalid/empty */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
