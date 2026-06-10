import React from "react";
import { Link } from "react-router-dom";

const Sidebar2 = () => {
  return (
    <>
      <div
        className="sidebar d-flex flex-column p-4 text-white"
        style={{
          height: "100%",
          background: "#003153",
        }}
      >
        <Link className="mb-5" to="/">
          <img
            src="/LeadFlow-logo.png"
            alt="LeadFlow"
            className="img-fluid"
            style={{
              maxWidth: "150px",
              width: "100%",
              height: "auto",
            }}
          />
        </Link>

        <nav>
          <ul className="list-unstyled text-center">
            <li className="mb-4">
              <Link
                className="sidebar-link text-decoration-none fs-5 w-100"
                to="/"
              >
                <span>
                  <img
                    src="/left-arrow.png"
                    alt=""
                    style={{ paddingRight: "5px", height: "20px" }}
                  />
                </span>{" "}
                Go to Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar2;
