import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../config/Config";
import { useLeadContext } from "../../contexts/useLeadContext";

const CreateMyAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { addUser } = useLeadContext();

  const handleSignup = async () => {
    if (!name || !email || !password) {
      toast.error("Name, email and password are required");
      return;
    }

    if (password.length < 7) {
      toast.error("Password must be at least 7 characters");
      return;
    }

    if (password.length > 15) {
      toast.error("Password cannot exceed 15 characters");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        authType: "email",
        name,
        email,
        password,
      });
      addUser(response.data.user);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      setName("");
      setEmail("");
      setPassword("");

      toast.success(
        <div>
          Sign up successful ✅
          <br />
          You can log in now.
        </div>,
      );
      navigate("/signinbyemail");
    } catch (error) {
      console.log(error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error creating user");
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
          <h3 className="mb-0 fw-bold fs-2">Create My Account</h3>
        </div>

        {/* EMAIL + PASSWORD */}
        <div className="emailPswrd">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="customInput"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="customInput"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="customInput"
          />
        </div>

        {/* BUTTONS */}
        <div className="loginBtns">
          <button
            className="login-button login-primary outline-0"
            onClick={handleSignup}
          >
            <span className="me-2">
              <BsPencilSquare size={20} />
            </span>
            <span>Create Account</span>
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

export default CreateMyAccount;
