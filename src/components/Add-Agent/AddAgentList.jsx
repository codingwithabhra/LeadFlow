import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { RiAdminFill } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";


const AddAgentList = () => {
  const { users, loading, updateUserRole } = useLeadContext();

  // console.log("From assign role page", users);

  return (
    <div className="content-area">
      <div className="bg-white px-3 px-md-4 py-4 rounded shadow-sm">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2">
          <h4 className="fs-3 text-dark mb-0">
            <span className="text-secondary">Complete User List</span>
          </h4>

          <span className="fs-6 text-muted small">
            Total Users: {users?.length || 0}
          </span>
        </div>

        <hr />

        {/* User List */}
        <div className="container-fluid px-0" style={{ minHeight: "300px" }}>
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success mb-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <p className="text-muted mb-0">User list loading...</p>
            </div>
          ) : !users || users.length === 0 ? (
            <div className="d-flex flex-column justify-content-center align-items-center text-center py-5">
              <h4 className="text-dark">No users available</h4>
              <p className="text-muted mb-0">Start by adding users.</p>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="user-card p-3 rounded shadow-sm"
                  style={{ backgroundColor: "#F0F8FF" }}
                >
                  <div className="row align-items-center g-3">
                    {/* User Name */}
                    <div className="col-12 col-lg-4">
                      <div className="d-flex flex-row flex-sm-row align-items-sm-center gap-2">
                        <span className="fs-6 fw-semibold badge bg-primary align-self-start">
                          Name :
                        </span>

                        <span className="fw-medium text-dark text-break">
                          {user.name}
                        </span>
                      </div>
                    </div>

                    {/* User Role */}
                    <div className="col-12 col-lg-3">
                      <div className="d-flex flex-row flex-sm-row align-items-sm-center gap-2">
                        <span className="fs-6 fw-semibold badge bg-secondary align-self-start">
                          Role :
                        </span>

                        <span className="fw-bold text-dark text-capitalize">
                          {user.role}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="col-12 col-lg-5">
                      <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-2">
                        <button
                          type="button"
                          className="btn btn-success d-flex align-items-center justify-content-center gap-2"
                          onClick={() => updateUserRole(user._id, "admin")}
                        >
                          <RiAdminFill size={18} />
                          <span>Make Admin</span>
                        </button>

                        <button
                          type="button"
                          className="btn btn-danger d-flex align-items-center justify-content-center gap-2"
                          onClick={() => updateUserRole(user._id, "salesAgent")}
                        >
                          <IoPersonAddSharp size={18} />
                          <span>Make Agent</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddAgentList;
