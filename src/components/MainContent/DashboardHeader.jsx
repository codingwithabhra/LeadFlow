import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import axios from "axios";
import { BASE_URL } from "../../config/Config";
import { HiOutlineClock } from "react-icons/hi2";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // Current time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${BASE_URL}/auth/user-profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.user);
        console.log(response.data.user);
      } catch (error) {
        console.error(error);

        setError(error.response?.data?.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Format time
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (loading) {
    return <p className="text-center mt-5">Loading profile...</p>;
  }

  if (error) {
    return <p className="text-dark text-center mt-5">{error}</p>;
  }

  return (
    <div className="headingInfo bg-white px-3 py-4 rounded shadow-sm mt-1 mt-sm-3 mb-3 mb-sm-5">
      <div className="headingInfo-btns d-flex justify-content-between">
        {/* HEADER */}
        <h2 className="text-secondary d-flex justify-content-center align-items-center">
          <span className="me-3">
            <MdDashboard size={35} />
          </span>
          <span>Dahboard</span>
        </h2>

        <div className="dashboard-btns d-flex justify-content-center align-items-center gap-3">
          {/* TIMER */}
          <div className="d-none d-md-block d-flex justify-content-center align-items-center text-secondary fw-semibold">
            <span className="me-2">
              <HiOutlineClock size={20} />
            </span>
            <span className="text-secondary">{formattedTime}</span>
          </div>

          <hr
            className="d-none d-md-block"
            style={{ height: "20px", backgroundColor: "#000", width: "2px" }}
          />

          {/* Profile */}
          <Link
            to="/myprofile"
            className="d-flex justify-content-center align-items-center text-decoration-none text-secondary"
          >
            <span className="">
              <img
                src={user?.profilePicture || "https://placehold.co/30"}
                alt="image"
                className="img-fluid rounded-circle"
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "cover",
                }}
              />
            </span>
            <span className="d-none d-md-block ms-2 fw-semibold">{user?.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
