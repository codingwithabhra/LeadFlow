import React from "react";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileHeader = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      localStorage.removeItem("token");
      navigate("/");
      toast.success("Logged out successfully");
    } catch (error) {
      console.log(error);
      toast.error("Logged out failed");
    }
  };

  return (
    <div className="filterBtn bg-white px-3 py-4 rounded shadow-sm mt-3 mb-5">
      <div className="container-fluid">
        <div className="heading-btns d-flex justify-content-between align-items-center">
          <h2 className="text-secondary">
            <span className="me-3">
              <BsPersonCircle />
            </span>
            <span>My Profile</span>
          </h2>
          <div className="btns d-flex gap-3">
            {/* UPDATE PROFILE */}
            {/* <Link to="/leads/agents/addagent" className="text-decoration-none m-auto">
              <button className="btn btn-success d-block m-auto fs-6">
                <span>Edit Profile</span>
                <span className="ms-2">
                  <CiEdit size={25} />
                </span>
              </button>
            </Link> */}

            {/* LOG OUT */}
            <button
              className="btn btn-danger d-block m-auto fs-6 d-flex justify-content-center align-items-center"
              onClick={handleLogOut}
            >
              <span className="d-none d-sm-block me-2">Log Out</span>
              <span className="">
                <IoLogOutOutline size={25} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
