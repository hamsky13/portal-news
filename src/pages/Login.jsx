import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/login.css";
import { Link } from "react-router-dom";

function Login() {
  const [formList, setFormList] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormList({ ...formList, [name]: value });
  };

  return (
    <div className="text-center body-login">
      <div className="container">
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                onChange={inputHandler}
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                onChange={inputHandler}
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </form>
          <label>
            <p>
              Don't have any account? <Link to="/register">Register here</Link>
            </p>
          </label>
        </main>
      </div>
    </div>
  );
}

export default Login;
