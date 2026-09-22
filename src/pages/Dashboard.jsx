import React from "react";
import Sidebar from "../components/Sidebars/Sidebar";
import Maincontent from "../components/MainContent/Maincontent";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import MobileNav from "../components/Sidebars/MobileNav";
import { IoMdCloseCircle } from "react-icons/io";

const Dashboard = () => {
  return (
    <>
      {/* Header */}
      <header className="header d-lg-none">
        {/* Header */}
        <h1 className="fw-bolder ms-3">
          <Link to="/" className="header-logo">
            {/* Large screen logo */}
            <img
              src="/Leadflowlogo-white.png"
              alt="LeadFlow"
              className="img-fluid"
            />
          </Link>
        </h1>

        {/* Toggle button (only visible on small screens) */}
        <button
          type="button"
          className="btn p-0 border-0 bg-transparent d-lg-none me-3"
          style={{ zIndex: 1 }}
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
          aria-label="Open menu"
        >
          <FiMenu size={35} className="text-white" />
        </button>
      </header>

      {/* Sidebar Offcanvas (Mobile) */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="mobileSidebar"
        style={{ backgroundColor: "#115bbd", maxWidth: "310px" }}
      >
        <div className="offcanvas-header" style={{ position: "relative" }}>
          <button
            type="button"
            className="btn p-0 border-0 bg-transparent text-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ position: "absolute", right: "20px", top: "20px" }}
          >
            <IoMdCloseCircle size={30} />
          </button>
        </div>
        <div className="offcanvas-body mt-4">
          <MobileNav />
        </div>
      </div>

      {/* Desktop Layout */}
      <main className="main-layout">
        {/* Sidebar */}
        <aside className="main-sidebar d-none d-lg-block">
          <Sidebar />
        </aside>
        {/* Main Content */}
        <section className="main-content">
          <Maincontent />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
