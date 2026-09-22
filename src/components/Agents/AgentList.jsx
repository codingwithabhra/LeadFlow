import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { useFilterContext } from "../../contexts/filterContext";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const AgentList = () => {
  const { users = [], loading } = useLeadContext();
  const { filter } = useFilterContext();
  const searchText = filter.agent.trim().toLowerCase();

  // 1. get users whose role is salesAgent
  // 2. filter them according to search text
  const agents = users.filter((user) => {
    const isAgent = user.role === "salesAgent";
    const matchesName = user.name?.toLowerCase().includes(searchText);
    return isAgent && matchesName;
  });
  console.log("Filtered agents:", agents);

  return (
    <>
      <div className="content-area">
        <div
          className="newLeads bg-white px-3 py-4 rounded shadow-sm"
          style={{ minHeight: "300px" }}
        >
          <div className="container-fluid">
            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
              <h4 className="fs-3 text-dark mb-0">
                <span className="text-secondary">Complete Agent List</span>
              </h4>

              <span className="fs-6 text-muted small">
                Total Agents : {agents?.length || 0}
              </span>
            </div>

            <hr />

            <div className="row g-4 mt-2">
              {loading ? (
                <p className="text-center mt-4 fs-5 text-danger">
                  Agent list is loading ...
                </p>
              ) : agents.length === 0 ? (
                <div className="text-center py-2">
                  <h4>No agents available</h4>
                </div>
              ) : (
                agents?.map((agent) => (
                  <Link
                    to={`/leads/leadsbyagent/${agent._id}`}
                    className="text-decoration-none"
                  >
                    <div className="card h-100 shadow-sm border-0.1 rounded-3">
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-12 col-md-6">
                            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                              <div className="d-flex justify-content-center align-items-center text-white badge bg-primary px-4 py-2 mb-2 mb-sm-0">
                                <span className="me-2"><IoMdPerson size={18} /></span>
                                <span>Agent :</span>
                              </div>
                              <div
                                className="ms-sm-3"
                                style={{ fontSize: "1rem" }}
                              >
                                {agent.name}
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-md-6">
                            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                              <div className="d-flex justify-content-center align-items-center text-white badge bg-danger px-4 py-2 mb-2 mb-sm-0">
                                <span className="me-2"><MdOutlineMailOutline size={18} /></span>
                                <span>Email :</span>
                              </div>
                              <div
                                className="ms-sm-3"
                                style={{
                                  fontSize: "1rem",
                                  wordBreak: "break-all",
                                  overflowWrap: "break-word",
                                }}
                              >
                                {agent.email}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentList;
