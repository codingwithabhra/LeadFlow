import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";

const CompleteAgentList = () => {
  const { users = [], deleteUser } = useLeadContext();
  const agents = users.filter((user)=> user.role === "salesAgent");
  
  return (
    <>
      <div className="content-area mt-4">
        <div className="bg-white px-3 py-4 rounded shadow-sm">
          <div className="container-fluid">
            <h2 className="text-secondary">Total Users List</h2>

            <hr />

            <div className="container-fluid">
              {agents.length === 0 ? (
                <p className="text-center mt-4 fs-5 text-dark">
                  No result found
                </p>
              ) : (
                users?.map((user) => (
                  <div
                    key={user.id}
                    className="row align-items-center mb-3 py-2 px-3 rounded shadow-sm"
                    style={{ backgroundColor: "#F0F8FF" }}
                  >
                    {/* Left Section (Name + Email) */}
                    <div className="col-9 col-md-8">
                      {/* User Name */}
                      <div className="row align-items-center g-1">
                        <div className="col-12 col-md-auto">
                          <span className="fw-semibold badge bg-primary me-2">
                            User Name :
                          </span>
                        </div>

                        <div className="col-12 col-md-auto fw-bold">
                          {user.name}
                        </div>

                        <div className="col-12 col-md-auto">
                          ({user.email})
                        </div>
                      </div>
                    </div>

                    {/* Delete user */}
                    <div className="col-3 col-md-4 text-end">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteUser(user._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteAgentList;
