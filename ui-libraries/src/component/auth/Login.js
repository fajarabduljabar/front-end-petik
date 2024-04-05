import React from "react";
import "bulma/css/bulma.min.css";
import { NavLink } from "react-router-dom";
import logo  from "../../images/logo_petik.png";


const Login = () => {
  return (
    <div>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4">
                <form className="box">
                <div class="field has-text-centered">
                  <NavLink to={"/"}>
                    <img src={logo} alt="logo-petik" width={94}/>
                  </NavLink>
                <h2 className="title has-text-primary ml-auto mr-3">Login</h2>
                </div>    
                  <div className="field">
                    <label for="email" className="label">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div className="field">
                    <label for="password" className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Masukkan password"
                    />
                  </div>
                  <div className="field">
                    <button className="button is-success has-text-white is-fullwidth">
                      Login
                    </button>
                  </div>
                  <div class="field">
                    <p>Belum punya akun? <NavLink to={"/register"}>Daftar</NavLink></p>
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
