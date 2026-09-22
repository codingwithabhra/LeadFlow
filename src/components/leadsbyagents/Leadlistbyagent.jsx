import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { useFilterContext } from "../../contexts/filterContext";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { useParams } from "react-router-dom";

const Leadlistbyagent = () => {
  const { agentId } = useParams();
  const { leads = [], users = [], loading } = useLeadContext();
  const { filter } = useFilterContext();

  console.log("this is from lead overview page filter -- ", filter);

  const agents = users.filter((user) => user.role === "salesAgent");

  // console.log("this is from lead overview page leads -- ", leads);

  // FILTER LOGIC
  const filteredLeads = leads.filter((lead) => {
    const statusMatch =
      filter.status === "" ||
      lead.status?.toLowerCase() === filter.status.toLowerCase();

    const agentMatch =
      lead.salesAgent?._id === agentId;

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
    <div className="filterBtn bg-white px-3 py-4 rounded shadow-sm">
      <div className="container-fluid">
        {/* Header */}
        <div className="d-flex flex-md-row justify-content-between align-items-center gap-4">
          <h4 className="fs-3 text-dark mb-0">
            <span className="text-secondary">
              Total List ({filteredLeads.length})
            </span>
          </h4>

          {/* ADD NEW LEAD */}
          <div className="addNewLead">
            <Link to="/leads/addnewlead" className="btn btn-success w-100 d-flex justify-content-center align-items-center">
              <span className="d-none d-md-block me-2">Add New Lead</span>
              <span className="">
                <IoMdAdd size={25} />
              </span>
            </Link>
          </div>
        </div>

        <hr />

        <div className="row g-4" style={{ minHeight: "200px" }}>
          {loading ? (
            <p>Leads are loading</p>
          ) : filteredLeads.length === 0 ? (
            <div className="d-flex flex-column justify-content-center align-items-center py-2">
              <h4>No leads available</h4>
            </div>
          ) : (
            filteredLeads.map((lead, index) => {
              return (
                <div className="col-12 col-lg-6" key={lead._id}>
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

                          <h5 className="mb-0 fw-bold text-dark">
                            {lead.name}
                          </h5>
                        </div>
                      </div>

                      <hr className="my-2" />

                      {/* LEAD INFORMATION */}
                      <div className="row g-3 text-sm-start text-center">
                        {/* STATUS */}
                        <div className="col-12 col-sm-4">
                          <div className="text-secondary small fw-semibold mb-1">
                            STATUS
                          </div>

                          <span className="badge bg-dark px-3 py-2">
                            {lead.status
                              ? lead.status.charAt(0).toUpperCase() +
                                lead.status.slice(1)
                              : "N/A"}
                          </span>
                        </div>

                        {/* PRIORITY */}
                        <div className="col-12 col-sm-4">
                          <div className="text-secondary small fw-semibold mb-1">
                            PRIORITY
                          </div>

                          <span className="badge bg-warning text-dark px-3 py-2">
                            {lead.priority
                              ? lead.priority.charAt(0).toUpperCase() +
                                lead.priority.slice(1)
                              : "N/A"}
                          </span>
                        </div>

                        {/* AGENT */}
                        <div className="col-12 col-sm-4">
                          <div className="text-secondary small fw-semibold mb-1">
                            AGENT
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
    </div>
  );
};

export default Leadlistbyagent;
