import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoPersonAddOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

const MobileNav = () => {
  return (
    <>
      {/* Navigation */}
      <nav>
        <ul className="list-unstyled mb-0">
          <li className="mb-4">
            <Link
              className="sidebar-link fs-5"
              to="/dashboard"
              title="Dashboard"
            >
              <RxDashboard />
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="mb-4">
            <Link className="sidebar-link fs-5" to="/leads" title="Leads">
              <BsClipboardData />
              <span>Leads</span>
            </Link>
          </li>

          <li className="mb-4">
            <Link className="sidebar-link fs-5" to="/leads/sales" title="Sales">
              <BsGraphUpArrow />
              <span>Sales</span>
            </Link>
          </li>

          <li className="mb-4">
            <Link
              className="sidebar-link fs-5"
              to="/leads/agents"
              title="Agents"
            >
              <IoPersonAddOutline />
              <span>Agents</span>
            </Link>
          </li>

          <li className="mb-4">
            <Link
              className="sidebar-link fs-5"
              to="/leads/reports"
              title="Reports"
            >
              <BsBarChartLine />
              <span>Reports</span>
            </Link>
          </li>

          <li className="mb-4">
            <Link className="sidebar-link fs-5" to="/settings" title="Settings">
              <IoSettingsOutline />
              <span>Settings</span>
            </Link>
          </li>

          <li className="mb-4">
            <Link
              className="sidebar-link fs-5"
              to="/myprofile"
              title="My Profile"
            >
              <BsPersonCircle />
              <span>My Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNav;
