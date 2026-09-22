import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";

const CompleteLeadList = () => {
  const { leads = [], deleteLead } = useLeadContext();

  return (
    <>
      <div className="content-area">
        <div className="bg-white px-3 py-4 rounded shadow-sm">
          <div className="container-fluid">
            <h2 className="text-secondary">Total Lead List</h2>

            <hr />

            <div className="container-fluid">
              {leads.length === 0 ? (
                <p className="text-center mt-4 fs-5 text-dark">
                  Lead List Loading ...
                </p>
              ) : (
                leads?.map((lead) => (
                  <div
                    key={lead._id}
                    className="row align-items-center mb-3 py-2 px-3 rounded shadow-sm"
                    style={{ backgroundColor: "#F0F8FF" }}
                  >
                    {/* Left Section (Name + Source) */}
                    <div className="col-9 col-md-8">
                      <div className="row align-items-center g-1">
                        {/* Lead Name */}
                        <div className="col-12 col-md-6 mb-1 mb-md-0 gap-1">
                          <span className="fw-semibold me-2 badge bg-primary">
                            Lead Name :
                          </span>
                          <span className="fw-bold d-block d-md-inline text-break mt-1">
                            {lead.name}
                          </span>
                        </div>

                        {/* Lead Source */}
                        <div className="col-12 col-md-6">
                          <span className="fw-semibold me-2 badge bg-success">
                            Source:
                          </span>
                          {lead.source.charAt(0).toUpperCase() +
                            lead.source.slice(1)}
                        </div>
                      </div>
                    </div>

                    {/* Delete Button */}
                    <div className="col-3 col-md-4 text-end">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteLead(lead._id)}
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

export default CompleteLeadList;
