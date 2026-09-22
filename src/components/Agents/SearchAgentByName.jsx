import React, {useState} from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { useFilterContext } from "../../contexts/filterContext";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { BsPersonLinesFill } from "react-icons/bs";
import "./Agents.css";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const SearchAgentByName = () => {
  const { users } = useLeadContext();
  const { filter, setFilter } = useFilterContext();

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleSearch = (e) => {
    setFilter((prev) => ({ ...prev, agent: e.target.value }));
  };

  return (
    <div className="filterBtn bg-white px-3 py-4 rounded shadow-sm mt-1 mt-sm-3 mb-3 mb-sm-5">
      <div className="container-fluid">
        <div className="heading-btns d-flex justify-content-between align-items-center">
          {/* Heading */}
          <h2 className="text-secondary d-flex justify-content-center align-items-center mb-0">
            <span className="me-3">
              <BsPersonLinesFill />
            </span>
            <span>Agents</span>
          </h2>

          <div className="btns d-flex gap-3">
            {/* DESKTOP SEARCH */}
            <div className="searchByAgentName d-none d-md-block">
              <div className="position-relative">
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>

                <input
                  type="text"
                  className="form-control ps-5"
                  placeholder="Search by agent name"
                  value={filter.agent}
                  onChange={handleSearch}
                />
              </div>
            </div>

            {/* Mobile search icon */}
            <div className="mobile-search-icon d-block d-md-none">
              <button
                className="btn btn-secondary"
                onClick={() => setShowMobileSearch(true)}
              >
                <CiSearch size={22} />
              </button>
            </div>

            {/* ADD AGENT */}
            <Link to="/leads/agents/addagent" className="text-decoration-none">
              <button className="btn btn-success d-flex justify-content-center align-items-center fs-6">
                <span className="">
                  <IoMdPersonAdd size={22} />
                </span>
                <span className="d-none d-lg-block ms-2">Add New Agent</span>
              </button>
            </Link>

            {/* MOBILE SEARCH DROP-DOWN */}
            <div
              className={`mobile-search-overlay ${
                showMobileSearch ? "show" : ""
              }`}
            >
              <div className="mobile-search-box">
                <div className="position-relative flexbox-grow-1">
                  <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>

                  <input
                    type="text"
                    autoFocus
                    className="form-control ps-5"
                    placeholder="Search by agent name"
                    value={filter.agent}
                    onChange={handleSearch}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowMobileSearch(false)}
                >
                  <IoClose size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAgentByName;
