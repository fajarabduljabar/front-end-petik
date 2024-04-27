import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo_petik.png"
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../features/authSlice";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
  }, [user, isSuccess, dispatch, navigate]);

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <form className="box" onSubmit={Auth}>
                <div class="field has-text-centered">
                  <NavLink to={"/"}>
                    <img src={logo} alt="" width={170} />
                  </NavLink>
                  <h3 className="title has-text-primary ml-auto">Login</h3>
                  {isError && <p className="has-text-centered is-danger">{message}</p>}
                </div>
                <div class="field">
                  <label for="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Masukkan email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="field">
                  <button
                    type="submit"
                    className="button is-success has-text-white is-fullwidth"
                  >
                    {isLoading ? "Loading...." : "Login"}
                  </button>
                </div>
                <div class="field">
                  <p>
                    Belum punya akun? <NavLink to={"/register"}>Daftar</NavLink>
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

export default Login;