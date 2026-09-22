import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLeadContext } from "../../contexts/useLeadContext";

const LeadDetails = () => {
  const { leads, users, updateLead } = useLeadContext();
  const { leadId } = useParams();

  const findLead = leads?.find((lead) => lead._id === leadId);
  const agents = users?.filter((user) => user.role === "salesAgent");

  console.log("this is from lead details component-- ", findLead);
  // console.log("this is agent list from lead details component -- ", agents);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (findLead) {
      setFormData(findLead);
    }
  }, [findLead]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const updatedLeaddata = await updateLead(leadId, formData);
    if (updatedLeaddata) {
      setFormData(updatedLeaddata); // ensure UI updates
    }
    setIsEditing(false);
  };

  return (
    <>
      <div className="container-fluid bg-white p-4 rounded shadow-sm">
        <h2 className="text-secondary fs-2">Lead Details</h2>
        <hr />
        {findLead && (
          <div className="container-fluid">
            <div className="shadow-sm" style={{ backgroundColor: "#F0F8FF" }}>
              <div
                className="row justify-content-center d-block m-auto"
                style={{ maxWidth: "600px" }}
              >
                <div className="col-12 py-3 d-block m-auto">
                  {" "}
                  {/* Controls width & centers horizontally */}
                  <div className="row fs-6 mb-2 g-2">
                    <div className="col-12 col-md-6">
                      <strong>Lead Name:</strong>
                    </div>
                    <div className="col-12 col-md-6">
                      {isEditing ? (
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control w-60"
                        />
                      ) : (
                        <span className="fs-6 badge bg-success">
                          {formData.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row fs-6 mb-2 g-2">
                    <div className="col-12 col-md-6">
                      <strong>Sales Agent:</strong>
                    </div>
                    <div className="col-12 col-md-6">
                      {isEditing ? (
                        <select
                          name="salesAgent"
                          value={formData.salesAgent}
                          onChange={handleChange}
                          className="form-select w-60"
                        >
                          {agents.map((agent) => {
                            return (
                              <option value={agent._id} key={agent._id}>
                                {agent.name}
                              </option>
                            );
                          })}
                        </select>
                      ) : (
                        <span className="fs-6 badge bg-success">
                          {findLead.salesAgent.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row fs-6 mb-2 g-2">
                    <div className="col-12 col-md-6">
                      <strong>Lead Source:</strong>
                    </div>
                    <div className="col-12 col-md-6">
                      {isEditing ? (
                        <select
                          name="source"
                          className="form-select w-60"
                          onChange={handleChange}
                          value={formData.source || ""}
                        >
                          <option value="">Select Source</option>
                          <option value="website">Website</option>
                          <option value="referral">Referral</option>
                          <option value="cold call">Cold Call</option>
                          <option value="advertisement">Advertisement</option>
                          <option value="email">Email</option>
                          <option value="other">Other</option>
                        </select>
                      ) : (
                        <span className="fs-6 badge bg-danger">
                          {formData.source}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row fs-6 mb-2 g-sm-2">
                    <div className="col-12 col-md-6">
                      <strong>Lead Status:</strong>
                    </div>
                    <div className="col-12 col-md-6">
                      {isEditing ? (
                        <select
                          name="status"
                          className="form-select w-60"
                          onChange={handleChange}
                          value={formData.status || ""}
                        >
                          <option value="">Select Status</option>
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="proposal sent">Proposal Sent</option>
                          <option value="closed">Closed</option>
                        </select>
                      ) : (
                        <span className="fs-6 badge bg-secondary">
                          {formData.status
                            ? formData.status.charAt(0).toUpperCase() +
                              formData.status.slice(1)
                            : "Not specified"}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row fs-6 mb-2 g-sm-2">
                    <div className="col-12 col-md-6">
                      <strong>Priority:</strong>
                    </div>
                    <div className="col-12 col-md-6">
                      {isEditing ? (
                        <select
                          className="form-select w-60"
                          onChange={handleChange}
                          name="priority"
                          value={formData.priority || ""}
                        >
                          <option value="">Select Priority</option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                      ) : (
                        <span className="fs-6 badge bg-secondary">
                          {formData.priority
                            ? formData.priority.charAt(0).toUpperCase() +
                              formData.priority.slice(1)
                            : "Not specified"}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row fs-6 g-2">
                    <div className="col-12 col-md-6">
                      <strong>Time to close:</strong>
                    </div>
                    <div className="col-12 col-md-6">
                      {isEditing ? (
                        <input
                          type="text"
                          name="timetoclose"
                          value={formData.timetoclose || ""}
                          onChange={handleChange}
                          className="form-control w-60"
                        />
                      ) : (
                        <span className="fs-6 badge bg-secondary">{formData.timetoclose}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <button
              className="btn btn-primary d-block m-auto"
              onClick={() => {
                if (isEditing) {
                  handleSave();
                } else {
                  setIsEditing(true);
                }
              }}
            >
              {isEditing ? "Save Changes" : "Edit Details"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LeadDetails;
