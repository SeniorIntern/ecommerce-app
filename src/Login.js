import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import loginLogo from "./img/loginImg.png";

function Login() {
  const history = useHistory(); // change url after login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // e.preventDefault() : prevent refresh
  //  = (e) =>  :   take an event
  const signIn = (e) => {
    e.preventDefault();

    // firebase setup
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // after login redirect to home
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // firebase setup
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          // after register redirect to home
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src={loginLogo}
        />
      </Link>

      {/* keep it all inside a container/frame */}
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            // e.target.value  : what the user typed in
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* type="submit"  : when pressed enter trigger the button */}
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the HAPPY BODY Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Happy Body Account
        </button>
      </div>
    </div>
  );
}

export default Login;
