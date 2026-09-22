import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { BASE_URL } from "../../config/Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        authType: "google",
        id_token: credentialResponse.credential,
      });

      // console.log("Backend Response:", response.data);
      console.log("LOGIN RESPONSE:", response.data);

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
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
            className="img-fluid animate__animated animate__fadeIn"
          />
        </div>

        {/* TAGLINE */}
        <div className="tagline animate__animated animate__slideInLeft">
          <h2 className="mb-0">
            Simplify Your <span>Workflow</span>
          </h2>
          <h2 className="mb-0 clrd-h2">
            Amplify Your <span>Results</span>
          </h2>
        </div>

        {/* TAGLINE */}
        <div className="about animate__animated animate__slideInLeft">
          <p className="mb-0">
            LeadFlow is a modern task management platform that helps teams
            organize leads, manage tasks, prioritize work, and streamline their
            workflow—all in one place.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="signin-buttons">
          <div className="loginBtns animate__animated animate__slideInRight">
            <Link className="login-button login-primary" to="/signinbyemail">
              <span className="me-2">
                <MdOutlineMailOutline size={22} />
              </span>
              <span>Continue with email</span>
            </Link>
            <Link
              className="login-button login-secondary"
              to="/createmyaccount"
            >
              <span className="me-2">
                <BsPencilSquare size={22} />
              </span>
              <span>Create my account</span>
            </Link>
          </div>
          <p className="text-center animate__animated animate__slideInRight">-- Or --</p>
          <div className="text-decoration-none googleLogin animate__animated animate__slideInRight">
            <GoogleLogin
              theme="filled_black"
              shape="pill"
              onSuccess={handleGoogleSuccess}
              onError={() => console.log("Login Failed")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
