import React, { useState } from "react";
import "./Auth.css";
import logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../action/AuthAction";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });
  const [confirmpass, setConfirmPass] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };
  return (
    <div className="Auth">
      {/* left side  */}
      <div className="a-left">
        <img src={logo} alt="" />
        <div className="Webname">
          <h1>N.tech</h1>
          <h6>Explore the impossible</h6>
        </div>
      </div>
      {/* right side  */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmpass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Confirm Password is not same.
          </span>
          <div>
            <div>
              <span
                style={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => {
                  setIsSignUp((prev) => !prev);
                  resetForm();
                }}
              >
                {isSignUp
                  ? "Already have an account. Login!"
                  : "Don't have an account. Sign Up"}
              </span>
            </div>
            <button
              className="button infoButton"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading.." : isSignUp ? "Sign Up" : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
