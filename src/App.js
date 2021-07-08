import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Stripe's public key
const promise = loadStripe(
  "pk_test_51JAd0aKGRg4eqamb8sFLro5OnCRXWa8g721GPyqOdwPPgXQuVperDmQ2uPVf1ygV5DWqGZe22x4GiyjGM6cvygMl00bBjUZaGL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  // useEffect  : only run once when the app components loads (like "if statement" in React)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // if user is logged in, set user to authUser
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // if user is logged out, set user to null
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM convention
    // using react router for home and checkout component.
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            {/* login route */}
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            {/* login route */}
            <Login />
          </Route>

          <Route path="/checkout">
            {/* checkout route */}
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            {/* payment route */}
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            {/* / : default route(Home.js). If path is not found then page redirects to home */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
