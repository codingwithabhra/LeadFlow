import React from "react";
import { useLeadContext } from "../contexts/useLeadContext";
import { useFilterContext } from "../contexts/filterContext";
import { Link } from "react-router-dom";

const Leadoverview = () => {
  const { leads = [], agents = [] } = useLeadContext();
  const { filter } = useFilterContext();
  console.log("this is from lead overview page filter -- ", filter);

  // FILTER LOGIC
  const filteredLeads = leads.filter((lead) => {
    const statusMatch =
      filter.status === "" ||
      lead.status?.toLowerCase() === filter.status.toLowerCase();

    const agentMatch = filter.agent === "" || lead.salesAgent === filter.agent;

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
  console.log("this is from lead overview page -- ", filteredLeads);
  console.log("this is from lead overview page agents -- ", agents);

  return (
    <>
      <div className="content-area mt-2">
        <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
          <div className="container">
            <h2 className="text-secondary">Lead Overview</h2>
            <hr />
            <div className="row g-4" style={{minHeight: "200px"}}>
              {filteredLeads.length === 0 ? (
                <p className="text-center mt-4 fs-5 text-danger">
                  No result found
                </p>
              ) : (
                filteredLeads?.map((lead) => {
                  const findAgent = agents?.find(
                    (agent) => agent._id === lead.salesAgent,
                  );

                  return (
                    <Link
                      className="text-decoration-none"
                      key={lead._id}
                      to={`/leads/leaddetails/${lead._id}`}
                    >
                      <div
                        className="card-body p-3 rounded shadow-sm g-3"
                        style={{ backgroundColor: "#E6E6FA" }}
                      >
                        <div className="row text-black align-items-center">
                          <div className="col-12 col-md-4">
                            <h5 className="mb-0">{lead.name}</h5>
                          </div>

                          <div className="col-12 col-md-4">
                            <span className="fw-bold">Status :</span>{" "}
                            <span className="badge bg-dark">
                              {lead.status.charAt(0).toUpperCase() +
                                lead.status.slice(1)}
                            </span>
                          </div>

                          <div className="col-12 col-md-4 text-md-end">
                            <span className="fw-bold">Agent :</span>{" "}
                            {findAgent?.name || "Not Assigned"}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadoverview;
