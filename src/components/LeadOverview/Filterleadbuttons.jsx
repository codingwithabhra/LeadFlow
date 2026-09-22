import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { useFilterContext } from "../../contexts/filterContext";
import "./Filterleadbuttons.css";

import { GiMagicBroom } from "react-icons/gi";
import { CiViewList } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";

const Filterleadbuttons = () => {
  const { users } = useLeadContext();

  const agents = Array.isArray(users)
    ? users.filter((user) => user.role === "salesAgent")
    : [];

  const { filter, setFilter } = useFilterContext();

  const clearFilters = () => {
    setFilter({
      priority: "",
      agent: "",
      status: "",
      timetoclose: "",
    });
  };

  const handleFilterChange = (key, value) => {
    setFilter({
      ...filter,
      [key]: value,
    });
  };

  return (
    <div className="filterBtn bg-white px-3 py-4 rounded shadow-sm mt-3 mb-5">
      <div className="container-fluid">
        <div className="heading-btns d-flex justify-content-between align-items-center">
          {/* =========================
              HEADING
          ========================= */}
          <h2 className="text-secondary d-flex align-items-center mb-0">
            <span className="me-3">
              <CiViewList size={35} />
            </span>

            <span>Leads</span>
          </h2>

          {/* =========================
              DESKTOP ACTIONS
              992px and above
          ========================= */}
          <div className="btns desktop-actions d-flex gap-3">
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

              <div className="dropdown-menu p-3 filter-dropdown-menu">
                {/* STATUS */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Status</label>

                  <select
                    className="form-select"
                    value={filter.status}
                    onChange={(e) =>
                      handleFilterChange("status", e.target.value)
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

                {/* AGENT */}
                <div>
                  <label className="form-label fw-semibold">Agent</label>

                  <select
                    className="form-select"
                    value={filter.agent}
                    onChange={(e) =>
                      handleFilterChange("agent", e.target.value)
                    }
                  >
                    <option value="">All Agents</option>

                    {agents.map((agent) => (
                      <option value={agent._id} key={agent._id}>
                        {agent.name}
                      </option>
                    ))}
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

              <div className="dropdown-menu p-3 filter-dropdown-menu">
                {/* PRIORITY */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Priority</label>

                  <select
                    className="form-select"
                    value={filter.priority}
                    onChange={(e) =>
                      handleFilterChange("priority", e.target.value)
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
                      handleFilterChange("timetoclose", e.target.value)
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

          {/* =========================
              MOBILE / TABLET
              991px and below
          ========================= */}
          <div className="mobile-actions dropdown">
            <button
              className="btn btn-outline-secondary three-dot-btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Open lead filters and sorting options"
            >
              <BsThreeDotsVertical size={22} />
            </button>

            <div className="dropdown-menu dropdown-menu-end p-3 responsive-filter-menu">
              {/* FILTER SECTION */}
              <div className="responsive-section">
                <h6 className="fw-semibold text-secondary mb-3">
                  <IoFilterOutline size={18} className="me-2" />
                  Filter By
                </h6>

                {/* STATUS */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Status</label>

                  <select
                    className="form-select"
                    value={filter.status}
                    onChange={(e) =>
                      handleFilterChange("status", e.target.value)
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

                {/* AGENT */}
                <div>
                  <label className="form-label fw-semibold">Agent</label>

                  <select
                    className="form-select"
                    value={filter.agent}
                    onChange={(e) =>
                      handleFilterChange("agent", e.target.value)
                    }
                  >
                    <option value="">All Agents</option>

                    {agents.map((agent) => (
                      <option value={agent._id} key={agent._id}>
                        {agent.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <hr />

              {/* SORT SECTION */}
              <div className="responsive-section">
                <h6 className="fw-semibold text-secondary mb-3">
                  <TbArrowsSort size={18} className="me-2" />
                  Sort By
                </h6>

                {/* PRIORITY */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Priority</label>

                  <select
                    className="form-select"
                    value={filter.priority}
                    onChange={(e) =>
                      handleFilterChange("priority", e.target.value)
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
                      handleFilterChange("timetoclose", e.target.value)
                    }
                  >
                    <option value="">Any Time</option>
                    <option value="0-3">0 - 3 Days</option>
                    <option value="4-10">4 - 10 Days</option>
                    <option value="10+">More than 10 Days</option>
                  </select>
                </div>
              </div>

              <hr />

              {/* CLEAR FILTER */}
              <button className="btn btn-primary w-100" onClick={clearFilters}>
                Clear Filters
                <GiMagicBroom size={20} className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterleadbuttons;
