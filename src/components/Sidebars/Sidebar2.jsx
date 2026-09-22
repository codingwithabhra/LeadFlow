import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import "./Sidebar.css";

const Sidebar2 = () => {
  return (
    <div className="sidebar d-flex flex-column p-4 text-white">
      {/* Logo */}
      <Link to="/" className="sidebar-logo">
        {/* Large screen logo */}
        <img
          src="/Leadflowlogo-white.png"
          alt="LeadFlow"
          className="sidebar-full-logo"
        />

        {/* Compact sidebar logo */}
        <img
          src="/small-logo.png"
          alt="LeadFlow"
          className="sidebar-small-logo"
        />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="list-unstyled text-center">
          <li className="mb-4">
            <Link className="sidebar-link fs-5" to="/dashboard" title="Go back">
              <IoArrowBackCircleSharp size={25} />
              <span>Go back</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar2;
