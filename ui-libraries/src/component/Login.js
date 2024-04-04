import React from "react";
import "bulma/css/bulma.min.css";

const Login = () => {
  return (
    <div>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4">
                <form className="box">
                <h2 className="title has-text-primary">Login</h2>
                  <div className="field">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div className="field">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Masukkan password"
                    />
                  </div>
                  <div className="field">
                    <button className="button is-success is-fullwidth">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
