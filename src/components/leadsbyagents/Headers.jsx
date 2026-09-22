import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { useFilterContext } from "../../contexts/filterContext";
import "../LeadOverview/Filterleadbuttons.css";
import { useParams } from "react-router-dom";

import { GiMagicBroom } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";

const Headers = () => {
  const { agentId } = useParams();
  const { users } = useLeadContext();

  const agents = users.filter((user) => user.role === "salesAgent");
  const salesagent = users.find(
    (user) => user._id?.toString() === agentId?.toString(),
  );
  console.log("the sales agent is -- ", salesagent);

  const { filter, setFilter } = useFilterContext();

  const clearFilters = () => {
    setFilter({
      priority: "",
      agent: "",
      status: "",
      timetoclose: "",
    });
  };
  return (
    <div className="filterBtn bg-white px-3 py-4 rounded shadow-sm mt-3 mb-5">
      <div className="container-fluid">
        <div className="heading-btns d-flex justify-content-between align-items-center flex-wrap">
          {/* HEADING */}
          <h2 className="text-secondary d-flex align-items-center mb-0">
            <span
              className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center me-3"
              style={{
                width: "35px",
                height: "35px",
              }}
            >
              {salesagent?.profilePicture ? (
                <img
                  src={salesagent.profilePicture}
                  alt={salesagent?.name || "User"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <BsPersonCircle size={35} color="#6c757d" />
              )}
            </span>

            <span>{salesagent?.name}</span>
          </h2>

          {/* BUTTONS */}
          <div className="btns d-flex gap-3">
            {/* FILTER BY */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <IoFilterOutline size={20} className="me-2" />
                Filter By
              </button>

              <div className="dropdown-menu p-3">
                {/* STATUS */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Status</label>

                  <select
                    className="form-select"
                    value={filter.status}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value="">All Status</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="proposal sent">Proposal Sent</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

              </div>
            </div>

            {/* SORT BY */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <TbArrowsSort size={20} className="me-2" />
                Sort By
              </button>

              <div className="dropdown-menu p-3">
                {/* PRIORITY */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Priority</label>

                  <select
                    className="form-select"
                    value={filter.priority}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        priority: e.target.value,
                      })
                    }
                  >
                    <option value="">All Priorities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

                {/* CLOSING TIME */}
                <div>
                  <label className="form-label fw-semibold">Closing Time</label>

                  <select
                    className="form-select"
                    value={filter.timetoclose}
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        timetoclose: e.target.value,
                      })
                    }
                  >
                    <option value="">Any Time</option>
                    <option value="0-3">0 - 3 Days</option>
                    <option value="4-10">4 - 10 Days</option>
                    <option value="10+">More than 10 Days</option>
                  </select>
                </div>
              </div>
            </div>

            {/* CLEAR FILTER */}
            <button
              className="btn btn-primary clear-filter-btn"
              onClick={clearFilters}
            >
              <span>Clear Filters</span>
              <GiMagicBroom size={22} className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
