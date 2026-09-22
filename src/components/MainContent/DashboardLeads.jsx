import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { Link } from "react-router-dom";

const DashboardLeads = () => {
  const { leads = [], loading } = useLeadContext();

  return (
    <div
      className="row g-4 bg-white rounded px-2"
      style={{ maxHeight: "400px" }}
    >
      {/* HEADER */}
      <div className="header d-flex justify-content-between align-items-center">
        <h4 className="text-secondary mb-0 fw-bold">Leads</h4>
        <p className="text-secondary mb-0">Total Leads: ({leads.length})</p>
      </div>

      {/* CONTENT */}
      <div className="content">
        {loading ? (
          <p>Leads are loading</p>
        ) : leads.length === 0 ? (
          <div className="d-flex flex-column justify-content-center align-items-center py-2">
            <h4>No leads available</h4>
          </div>
        ) : (
          leads.map((lead, index) => {
            return (
              <div className="col-12 mb-4" key={lead._id}>
                <Link
                  to={`/leads/leaddetails/${lead._id}`}
                  className="text-decoration-none"
                >
                  <div
                    className="card h-100 border-0 shadow-sm rounded-4 p-3 lead-card"
                    style={{
                      backgroundColor: "#F0F8FF",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {/* TOP SECTION */}
                    <div className="d-flex justify-content-center justify-content-sm-start align-items-start mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="text-secondary fw-semibold">
                          #{index + 1}
                        </span>

                        <h5 className="mb-0 fw-bold text-dark">{lead.name}</h5>
                      </div>
                    </div>

                    <hr className="my-2" />

                    {/* LEAD INFORMATION */}
                    <div className="d-flex align-items-center flex-wrap gap-2 gap-md-5">
                      {/* STATUS */}
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="me-2 badge text-bg-success">
                          Status :
                        </div>

                        <span className="fw-semibold text-dark">
                          {lead.status
                            ? lead.status.charAt(0).toUpperCase() +
                              lead.status.slice(1)
                            : "N/A"}
                        </span>
                      </div>

                      {/* AGENT */}
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="me-2 badge text-bg-danger">
                          Agent :
                        </div>

                        <div className="fw-semibold text-dark">
                          {lead.salesAgent?.name || "Not Assigned"}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default DashboardLeads;
