import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory(); // use browser history
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // amount getting passed
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {/* push unlike "link to" preserves the styling of the button */}
      <button onClick={(e) => history.push("/payment")}>
        Proced to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
