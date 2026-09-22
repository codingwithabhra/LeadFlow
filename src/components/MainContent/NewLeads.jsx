import React from "react";
import { Link } from "react-router-dom";
import { useLeadContext } from "../../contexts/useLeadContext";
import { useFilterContext } from "../../contexts/filterContext";

const NewLeads = () => {
  const { leads, loading } = useLeadContext();
  const { filter } = useFilterContext();

  const filteredLeads = leads.filter((lead) => {
    if (!filter.status) return true; // no filter → show all

    return lead.status?.toLowerCase() === filter.status.toLowerCase();
  });

  return (
    <div
      className="newLeads bg-white px-3 py-4 rounded shadow-sm"
      style={{ maxHeight: "400px" }}
    >
      <div className="">
        <h4 className="">Leads</h4>

        <div
          className="row g-4 mt-1"
          style={{ maxHeight: "300px", overflowY: "auto", scrollbarWidth:"none", scrollBehavior:"smooth" }}
        >
          {loading ? (
            <p>Leads are loading</p>
          ) : filteredLeads.length === 0 ? (
            <div className="text-center py-2">
              <h4>No leads available</h4>
              <p>Start by creating your first lead.</p>
            </div>
          ) : (
            filteredLeads?.map((lead, index) => (
              <Link
                className="col-12 text-decoration-none"
                key={lead._id}
                to={`/leads/leaddetails/${lead._id}`}
              >
                <div
                  className="card h-100 shadow-sm border-0 rounded-3"
                  style={{ backgroundColor: "#F0F8FF" }}
                >
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-dark">
                      <span className="me-2">{index + 1}.</span>
                      <span>{lead.name}</span>
                    </h5>

                    <div className="d-flex flex-column flex-lg-row gap-1 gap-lg-5">
                      <p className="card-text mb-1">
                        <span className="badge bg-success">Source:</span>{" "}
                        <span className="fw-semibold">
                          {lead.source
                            ? lead.source.charAt(0).toUpperCase() +
                              lead.source.slice(1)
                            : "Not specified"}
                        </span>
                      </p>

                      <p className="card-text">
                        <span className="badge bg-danger">Status:</span>{" "}
                        <span className="fw-semibold">
                          {lead.status
                            ? lead.status.charAt(0).toUpperCase() +
                              lead.status.slice(1)
                            : "Not specified"}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewLeads;
