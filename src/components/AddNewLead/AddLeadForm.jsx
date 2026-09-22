import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLeadContext } from "../../contexts/useLeadContext";
import { BASE_URL } from "../../config/Config";

const AddLeadForm = () => {
  const { setLeads, users } = useLeadContext();

  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [salesAgent, setSalesAgent] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [timetoclose, settimetoclose] = useState("");
  const [tags, setTags] = useState("");
  const [formdata, setFormdata] = useState(false);
  const [agents, setAgents] = useState([]);

  const tagOptions = ["hot", "cold", "urgent", "follow-up", "important"];

  const agent = users.filter((user) => user.role === "salesAgent");

  const handleform = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();

    if (
      name &&
      source &&
      salesAgent &&
      status &&
      priority &&
      timetoclose &&
      tags
    ) {
      try {
        const response = await axios.post(
          `${BASE_URL}/leads`,
          {
            name,
            source,
            salesAgent,
            status,
            priority,
            timetoclose,
            tags,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        // Refetch fresh data
        setLeads((prevLeads) => [...prevLeads, response.data]);

        console.log("Lead Created:", response.data);

        // Reset form after success
        setName("");
        setSource("");
        setSalesAgent("");
        setStatus("");
        setPriority("");
        settimetoclose("");
        setTags("");

        toast.success("Lead Created Successfully");
      } catch (error) {
        console.error(error.response?.data?.message || error.message);
        toast.error(error.response?.data?.message || "Lead creation failed");
      }
    }
  };

  return (
    <div>
      <div className="">
        <div className="bg-white p-4 mx-auto rounded shadow-sm">
          {/* Header */}
          <div className="text-center">
            <h4 className="fs-3 text-dark mb-0">
              <span className="text-secondary">Lead Form</span>
            </h4>
          </div>

          <hr />

          <form className="py-4 px-2 px-sm-5" onSubmit={handleform}>
            {/* LEAD NAME */}
            <div className="row align-items-center pb-4">
              <div className="col-md-4">
                <label className="form-label">Lead Name :</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  required
                  value={name}
                />
              </div>
            </div>

            {/* LEAD SOURCE */}
            <div className="row align-items-center pb-4">
              <div className="col-md-4">
                <label className="form-label">Lead Source :</label>
              </div>
              <div className="col-md-8">
                <select
                  className="form-select"
                  onChange={(e) => setSource(e.target.value)}
                  required
                  value={source}
                >
                  <option value="">Select Source</option>
                  <option value="website">Website</option>
                  <option value="referral">Referral</option>
                  <option value="cold call">Cold Call</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="email">Email</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* SALES AGENT */}
            <div className="row align-items-center pb-4">
              <div className="col-md-4">
                <label className="form-label">Sales Agent :</label>
              </div>
              <div className="col-md-8">
                <select
                  className="form-select"
                  onChange={(e) => setSalesAgent(e.target.value)}
                  required
                  value={salesAgent}
                >
                  <option value="">Select Agent</option>
                  {agent.map((a) => (
                    <option key={a._id} value={a._id}>
                      {a.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* LEAD STATUS */}
            <div className="row align-items-center pb-4">
              <div className="col-md-4">
                <label className="form-label">Lead Status :</label>
              </div>
              <div className="col-md-8">
                <select
                  className="form-select"
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  value={status}
                >
                  <option value="">Select Status</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="proposal sent">Proposal Sent</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>

            {/* PRIORITY */}
            <div className="row align-items-center pb-4">
              <div className="col-md-4">
                <label className="form-label">Priority :</label>
              </div>
              <div className="col-md-8">
                <select
                  className="form-select"
                  onChange={(e) => setPriority(e.target.value)}
                  required
                  value={priority}
                >
                  <option value="">Select Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {/* TIME TO CLOSE */}
            <div className="row align-items-center pb-4">
              <div className="col-md-4">
                <label className="form-label">Time to Close :</label>
              </div>
              <div className="col-md-8">
                <input
                  type="number"
                  className="form-control"
                  placeholder="no of days"
                  onChange={(e) => settimetoclose(e.target.value)}
                  required
                  value={timetoclose}
                />
              </div>
            </div>

            {/* TAGS */}
            <div className="row align-items-center">
              <div className="col-md-4">
                <label className="form-label">Tags :</label>
              </div>
              <div className="col-md-8">
                <select
                  className="form-select"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                >
                  <option value="">Select Tag</option>
                  {tagOptions.map((tag, index) => (
                    <option key={index} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="d-block mx-auto mt-4 btn btn-primary py-2 px-4"
            >
              Create Lead
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLeadForm;
