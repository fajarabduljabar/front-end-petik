import React from "react";
import "bulma/css/bulma.min.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo_petik.png"

function Register() {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <form className="box">
               <div class="field has-text-centered">
                <NavLink to={'/'}>
                  <img src={logo} alt="" width={170}/>
                </NavLink>
               <h3 className="title has-text-primary ml-auto">Register</h3>
               </div>
               <div class="field">
                  <label for="nama" className="label">
                    Nama
                  </label>
                  <input
                    type="nama"
                    className="input"
                    placeholder="Masukkan nama"
                  />
                  {/* input role user */}
                  <input
                    type="hidden"
                  />
                </div>
                <div class="field">
                  <label for="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Masukkan email"
                  />
                </div>
                <div class="field">
                  <label for="password" className="label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input"
                    placeholder="************"
                  />
                </div>
                <div class="field">
                  <label for="confPassword" className="label">
                    Confirm Password
                  </label>
                  <input
                    type="confPassword"
                    id="confPassword"
                    className="input"
                    placeholder="************"
                  />
                </div>
                <div class="field">
                  <button className="button is-success has-text-white is-fullwidth">
                    Register
                  </button>
                </div>
                <div class="field">
                  <p>
                    Sudah punya akun? <NavLink to={"/login"}>Login</NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;