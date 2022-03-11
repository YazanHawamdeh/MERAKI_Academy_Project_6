import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
//redax

import { useSelector } from "react-redux";

// =================================================================

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role_id = "1";
  const [message, setMessage] = useState("");

  // =================================================================

  const addNewUser = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("/users", {
        userName,
        email,
        password,
        role_id,
      });
      if (result.data.success) {
        setMessage("The user has been created successfully");
        navigate("/login");
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.massage);
      }
      setMessage("Error happened while register, please try again");
    }
  };

  // =================================================================

  return (

<div>
      <div class="form-floating">
        <input
          type="text"
          name="login_email"
          class="form-control"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label> Email </label>
      </div>
      <span class="text-danger"></span>
      <div class="password-with-toggler input-group floating-input-group">
        <div class="form-floating flex-grow-1">
          <input
            type={showPassword ? "text" : "password"}
            name="login_password"
            class="password form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label> Password </label>
        </div>
        <span class="input-group-text">
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              onClick={() => setShowPassword(false)}
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              onClick={() => setShowPassword(true)}
              class="bi bi-eye-slash-fill"
              style={{ cursor: "pointer" }}
              viewBox="0 0 16 16"
            >
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
            </svg>
          )}
        </span>
      </div>
      <span class="text-danger"></span>
      <div class="form-check">
        <input
          type="checkbox"
          name="remember_me"
          id="remember_me"
          class="form-check-input"
        />
        <label class="form-check-label" for="remember_me">
          Remember Me
        </label>
        <a
          href="#"
          class="float-end open-modal"
          data-current="loginModal"
          data-target="forgotPasswordModal"
        >
          Forgot Password
        </a>
      </div>
      <div class="form-group mt-4">
        <button
          type="submit"
          class="btn btn-primary d-flex w-100 justify-content-center"
        >
          Log in
        </button>
        
      </div>
    </div>



    // <>
     


    
  );
};

export default Register;
