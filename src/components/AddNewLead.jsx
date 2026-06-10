import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLeadContext } from "../contexts/useLeadContext";

const AddNewLead = () => {
  const { setLeads } = useLeadContext();

  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [salesAgent, setSalesAgent] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [timetoclose, settimetoclose] = useState("");
  const [tags, setTags] = useState([]);
  const [formdata, setFormdata] = useState(false);
  const [agents, setAgents] = useState([]);

  const tagOptions = ["hot", "cold", "urgent", "follow-up", "important"];

  useEffect(() => {
    const fetchagents = async () => {
      try {
        const response = await axios.get(
          "https://agent-three-pi.vercel.app/agent",
        );
        setAgents(response.data);
        console.log("Responses are --", response);
      } catch (error) {
        console.error("Error fetching agents:", error);
        toast.error("Failed to load sales agents");
      }
    };
    fetchagents();
  }, []);

  const handleform = async (e) => {
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
          "https://leads-peach-rho.vercel.app/leads",
          {
            name,
            source,
            salesAgent,
            status,
            priority,
            timetoclose,
            tags,
          },
        );

        // Refetch fresh data
        const updatedLeads = await axios.get(
          "https://leads-peach-rho.vercel.app/leads",
        );

        setLeads(updatedLeads.data);

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
        console.error("Error creating lead:", error);
        toast.error("Something went wrong ");
      }
    }
  };

  return (
    <>
      <div>
        <h2 className="text-secondary py-2">Add New Lead Form</h2>
        <div className="container mt-4">
          <div
            className="bg-white p-4 mx-auto rounded shadow-sm"
            style={{ maxWidth: "1000px" }}
          >
            <form className="py-4 px-5" onSubmit={handleform}>
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
                    {agents.map((agent) => (
                      <option key={agent._id} value={agent._id}>
                        {agent.name}
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
    </>
  );
};

export default AddNewLead;
