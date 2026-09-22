import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { Link } from "react-router-dom";

const Salesagents = () => {
  const { users = [], loading } = useLeadContext();
  const agents = users.filter((user) => user.role === "salesAgent");

  return (
    <div className="newLeads bg-white px-3 py-4 rounded shadow-sm">
      <div className="">
        <h4 className="">Agents</h4>

        <div
          className="row g-4 mt-1"
          style={{ maxHeight: "300px", overflowY: "auto", scrollbarWidth:"none", scrollBehavior:"smooth" }}
        >
          {loading ? (
            <p>Leads are loading</p>
          ) : agents.length === 0 ? (
            <div className="text-center py-2">
              <h4>No leads available</h4>
              <p>Start by creating your first lead.</p>
            </div>
          ) : (
            agents?.map((agent, index) => (
              <Link
                className="col-12 text-decoration-none"
                key={agent._id}
                to={`/leads/leadsbyagent/${agent._id}`}
              >
                <div
                  className="card h-100 shadow-sm border-0 rounded-3"
                  style={{ backgroundColor: "#F0F8FF" }}
                >
                  <div className="card-body">
                    <h5 className="card-title d-flex align-items-center">
                      <span className="me-2 badge bg-primary">Name :</span>
                      <span>{agent.name}</span>
                    </h5>

                    <div className="d-flex flex-column flex-lg-row gap-1 gap-lg-5">
                      <p className="card-text mb-1">
                        <span className="badge bg-success">Email :</span>{" "}
                        <span className="">{agent.email}</span>
                      </p>

                      <p className="card-text">
                        <span className="badge bg-dark">Role :</span>{" "}
                        <span className="">
                          {agent.role.charAt(0).toUpperCase() +
                            agent.role.slice(1)}
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

export default Salesagents;
