import React, { useEffect, useState } from "react";
import "bulma/css/bulma.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo_petik.png";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../features/authSlice";

const Login = () => {
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
    <div>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4">
                <form className="box" onSubmit={Auth}>
                  {isError && <p className="has-text-centered">{message}</p>}
                  <div class="field has-text-centered">
                    <NavLink to={"/"}>
                      <img src={logo} alt="logo-petik" width={94} />
                    </NavLink>
                    <h2 className="title has-text-primary ml-auto mr-3">
                      Login
                    </h2>
                  </div>
                  <div className="field">
                    <label for="email" className="label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="input"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Masukkan email"
                    />
                  </div>
                  <div className="field">
                    <label for="password" className="label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="input"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan password"
                    />
                  </div>
                  <div className="field">
                    <button
                      type="submit"
                      className="button is-success has-text-white is-fullwidth"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Login"}
                    </button>
                  </div>
                  <div class="field">
                    <p>
                      Belum punya akun?{" "}
                      <NavLink to={"/register"}>Daftar</NavLink>
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

export default Login;
