import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GoSignIn } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../config/Config";

const EmailSignin = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        formdata,
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      toast.success("Login successfull");
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login Failed");
      toast.error("Invalid credentials");
    }
  };
  
  return (
    <div className="signinBg container-fluid">
      <div className="signin-blur-bg">
        {/* LOGO */}
        <div className="landingpage-logo">
          <img
            src="/Leadflowlogo-white.png"
            alt="LeadFlow"
            className="img-fluid"
          />
        </div>

        {/* TAGLINE */}
        <div className="tagline">
          <h3 className="mb-0 fw-bold fs-2">Sign in with email</h3>
        </div>

        {/* EMAIL + PASSWORD */}
        <div className="emailPswrd">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="customInput"
            value={formdata.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="customInput"
            value={formdata.password}
            onChange={handleChange}
          />
        </div>

        {/* BUTTONS */}
        <div className="loginBtns">
          <button
            className="login-button login-primary outline-0"
            onClick={handleLogin}
          >
            <span className="me-2">
              <GoSignIn size={22} />
            </span>
            <span>Sign in</span>
          </button>
          <Link className="login-button login-secondary" to="/">
            <span className="me-2">
              <IoIosArrowRoundBack size={28} />
            </span>
            <span>Go Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailSignin;
