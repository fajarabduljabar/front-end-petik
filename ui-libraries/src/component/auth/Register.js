import React from "react";
import "bulma/css/bulma.min.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo_petik.png";

const Register = () => {
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
                      <img src={logo} alt="logo-petik" width={94} />
                    </NavLink>
                    <h2 className="title has-text-primary ml-auto mr-3">
                      Register
                    </h2>
                  </div>
                  <div className="field">
                    <label for="nama" className="label">
                      Nama
                    </label>
                    {/* input  */}
                    <input
                    id="nama"
                      type="nama"
                      className="input"
                      placeholder="Masukkan nama"
                    />
                    <input type="hidden" className="input" />
                  </div>
                  <div className="field">
                    <label for="email" className="label">
                      Email
                    </label>
                    <input
                    id="email"
                      type="email"
                      className="input"
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div className="field">
                    <label for="password" className="label">
                      Password
                    </label>
                    <input
                    id="password"
                      type="password"
                      className="input"
                      placeholder="Masukkan password"
                    />
                  </div>
                  <div className="field">
                    <label for="confpassword" className="label">
                      Confirm Password
                    </label>
                    <input
                    id="confpassword"
                      type="password"
                      className="input"
                      placeholder="Masukkan confpassword"
                    />
                  </div>
                  <div className="field">
                    <button className="button is-success has-text-white is-fullwidth">
                      Register
                    </button>
                  </div>
                  <div class="field">
                    <p>
                      Sudah punya akun?{" "}
                      <NavLink to={"/login"}>Login</NavLink>
                    </p>
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

export default Register;
