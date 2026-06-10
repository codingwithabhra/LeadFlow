import React from "react";
import { useLeadContext } from "../contexts/useLeadContext";
import { useParams } from "react-router-dom";
import { useFilterContext } from "../contexts/filterContext";

const LeadsByAgentContent = () => {
  const { leads, agents } = useLeadContext();
  const agentId = useParams();
  const { filter, setFilter } = useFilterContext();

  // Filter leads with status "New"
  const newLeads = leads.filter((lead) => lead.salesAgent === agentId.agentId);
  const agentDetails = agents?.find((agent) => agent._id === agentId.agentId);

  // FILTER LOGIC
  const filteredLeads = leads.filter((lead) => {
    const statusMatch =
      filter.status === "" ||
      lead.status?.toLowerCase() === filter.status.toLowerCase();

    const priorityMatch =
      filter.priority === "" ||
      lead.priority?.toLowerCase() === filter.priority.toLowerCase();

    return statusMatch && priorityMatch;
  });

  console.log("this is from leads by agents --- ", newLeads);
  console.log("this is too from leads by agents --- ", leads);
  console.log("this is also from leads by agents --- ", agentDetails);

  return (
    <>
      <h2 className="text-secondary pb-2">Lead List by Agent</h2>
      <div className="content-area">
        <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
          <h4 className="fs-5 fw-bold">
            
            <span className="text-white fs-5 badge bg-success">
              {agentDetails?.name} ({agentDetails?.email})
            </span>
          </h4>
          <hr />
          <div style={{ minHeight: "300px" }}>
            {newLeads.length === 0 ? (
              <p className="text-muted">No new leads</p>
            ) : (
              <div className="container-fluid">
                {newLeads.map((lead, index) => {
                  const agent = agents.find(
                    (agent) => agent._id === lead.salesAgent,
                  );

                  return (
                    <div
                      key={lead._id}
                      className="row align-items-center border rounded p-3 mb-3 shadow-sm bg-light"
                    >
                      {/* Lead Number */}
                      <div className="col-12 col-md-2 fw-bold text-secondary">
                        Lead {index + 1}
                      </div>

                      {/* Lead Name */}
                      <div className="col-12 col-md-5">
                        <span className="fw-semibold">Lead Name :</span>{" "}
                        {lead.name}
                      </div>

                      {/* Sales Agent */}
                      <div className="col-12 col-md-5">
                        <span className="fw-semibold">Status :</span>{" "}
                        {lead.status.toUpperCase()}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <hr />

          <div
            className="px-4 py-3 rounded shadow-sm"
            style={{ backgroundColor: "#003153", color: "white" }}
          >
            {/* Filters Section */}
            <div
              className="row align-items-center mb-3 py-2 rounded"
              // style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="col-12 col-md-2 fw-bold fs-5 mb-2 mb-md-0">
                Filters:
              </div>

              {/* Status Filter */}
              <div className="col-12 col-md-4 mb-2 mb-md-0">
                <select className="form-select">
                  <option value="">Status</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                </select>
              </div>

              {/* Priority Filter */}
              <div className="col-12 col-md-4">
                <select
                  className="form-select"
                  value={filter.priority}
                  onChange={(e) =>
                    setFilter({ ...filter, priority: e.target.value })
                  }
                >
                  <option value="">Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {/* Sort Section */}
            <div
              className="row align-items-center py-2 rounded"
              // style={{ backgroundColor: "#eef6ff" }}
            >
              <div className="col-12 col-md-2 fw-bold fs-5 mb-2 mb-md-0">
                Sort By:
              </div>

              <div className="col-12 col-md-4">
                <select className="form-select">
                  <option value="">Time to Close</option>
                  <option value="lowToHigh">Low → High</option>
                  <option value="highToLow">High → Low</option>
                </select>
              </div>

              {/* Clear Filter Button */}
              <div className="col-12 col-md-4">
                <button
                  className="btn btn-primary w-100"
                  onClick={() =>
                    setFilter({
                      priority: "",
                      agent: "",
                      status: "",
                      timetoclose: "",
                    })
                  }
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadsByAgentContent;
