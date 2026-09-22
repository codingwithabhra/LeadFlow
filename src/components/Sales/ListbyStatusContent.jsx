import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { useFilterContext } from "../../contexts/filterContext";

const ListbyStatusContent = () => {
  const { leads = [], users = [], loading } = useLeadContext();
  const { filter, setFilter } = useFilterContext();

  const agents = users.filter((user)=> user.role === "salesAgent");

  // FILTER LOGIC
  const filteredLeads = leads.filter((lead) => {
    const statusMatch =
      lead.status?.toLowerCase() === "new";

    const agentMatch = filter.agent === "" || lead.salesAgent?._id?.toString() === filter.agent?.toString();

    const priorityMatch =
      filter.priority === "" ||
      lead.priority?.toLowerCase() === filter.priority.toLowerCase();

    // TIME TO CLOSE FILTER
    let timeMatch = true;

    if (filter.timetoclose === "0-3") {
      timeMatch = lead.timetoclose <= 3;
    }

    if (filter.timetoclose === "4-10") {
      timeMatch = lead.timetoclose >= 4 && lead.timetoclose <= 10;
    }

    if (filter.timetoclose === "10+") {
      timeMatch = lead.timetoclose > 10;
    }

    return statusMatch && agentMatch && priorityMatch && timeMatch;
  });

  return (
    <>
      <div className="content-area">
        <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
          <h4 className="fs-4 fw-bold text-dark text-center">
            Status : <span className="badge bg-success">New</span>
          </h4>

          <hr />

          <div className="container-fluid" style={{ minHeight: "300px" }}>
            {loading ? (
              <p className="text-muted">Sales list loading ...</p>
            ) : filteredLeads.length === 0 ? (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h4>No leads available</h4>
                <p>Start by creating your first lead.</p>
              </div>
            ) : (
              filteredLeads.map((lead, index) => {

                return (
                  <div
                    key={lead._id}
                    className="row align-items-center rounded p-3 mb-3 shadow-sm"
                    style={{ backgroundColor: "#F0F8FF" }}
                  >
                    {/* Lead Number */}
                    <div className="col-12 col-md-2 fw-bold text-dark">
                      Lead {index + 1} :
                    </div>

                    {/* Lead Name */}
                    <div className="col-12 col-md-2 fw-bold">{lead.name}</div>

                    {/* Sales Agent */}
                    <div className="col-12 col-md-4">
                      <span className="fw-bold">Sales Agent :</span>{" "}
                      {lead.salesAgent?.name || "Not Assigned"}
                    </div>

                    {/* Priority + Time to close */}
                    <div className="col-12 col-md-4">
                      <span className="badge bg-danger">
                        {lead.priority} priority
                      </span>{" "}
                      /{" "}
                      <span className="badge bg-success">
                        {lead.timetoclose} day(s) to close
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListbyStatusContent;
