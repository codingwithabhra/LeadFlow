import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/Config";
import { useLeadContext } from "../../contexts/useLeadContext";
import { useFilterContext } from "../../contexts/filterContext";

const ProfileContent = () => {
  const { leads = [], users = [], loading, currentuser } = useLeadContext();
  const { filter } = useFilterContext();

  // FILTER LOGIC
  const filteredLeads =
    currentuser?.role === "salesAgent"
      ? leads.filter(
          (lead) =>
            lead.salesAgent?._id?.toString() === currentuser?._id?.toString() &&
            lead.status === "closed",
        )
      : [];

  console.log("Closed leads for current user:", filteredLeads);

  return (
    <div className="filterBtn bg-white px-3 py-4 rounded shadow-sm mt-3 mb-5">
      <div className="container-fluid">
        {loading ? (
          <p>Profile is loading ...</p>
        ) : currentuser ? (
          <div className="profileDetails d-flex justify-content-center flex-column align-items-center">
            {/* IMAGE */}
            <div className="image">
              <img
                src={currentuser?.profilePicture || "https://placehold.co/250"}
                alt={currentuser?.name || "Profile"}
                className="img-fluid mt-2 mb-3 mb-sm-5 rounded-circle shadow-md"
                style={{
                  width: "clamp(120px, 25vw, 250px)",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* PROFILE DATA */}
            <div className="profileData d-flex flex-column flex-sm-row gap-1 gap-sm-5">
              <div className="left fs-5">
                <p className="d-flex flex-column flex-md-row">
                  <span className="fw-bold me-md-2 mb-1 mb-md-0 badge bg-success align-self-start text-nowrap">
                    Name :
                  </span>

                  <span className="fw-bold">{currentuser?.name}</span>
                </p>

                <p className="d-flex flex-column flex-md-row">
                  <span className="fw-bold me-md-2 mb-1 mb-md-0 badge bg-success align-self-start text-nowrap">
                    Email :
                  </span>

                  <span>{currentuser?.email}</span>
                </p>

                <p className="d-flex flex-column flex-md-row">
                  <span className="fw-bold me-md-2 mb-1 mb-md-0 badge bg-success align-self-start text-nowrap">
                    Role :
                  </span>

                  <span className="fw-semibold">
                    {currentuser?.role.slice(0, 1).toUpperCase(0) +
                      currentuser?.role.slice(1).toLowerCase()}
                  </span>
                </p>
              </div>

              <div className="right fs-5">
                <p className="d-flex flex-column flex-md-row">
                  <span className="fw-bold me-md-2 mb-1 mb-md-0 badge bg-success align-self-start text-nowrap">
                    Joined On :
                  </span>

                  <span>
                    {currentuser?.createdAt
                      ? new Date(currentuser.createdAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "N/A"}
                  </span>
                </p>

                <p className="d-flex flex-column flex-md-row">
                  <span className="fw-bold me-md-2 mb-1 mb-md-0 badge bg-success align-self-start text-nowrap">
                    Leads Closed :
                  </span>

                  <span>
                    {currentuser.role !== "salesAgent"
                      ? "Not applicable"
                      : filteredLeads.length}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Profile not found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
