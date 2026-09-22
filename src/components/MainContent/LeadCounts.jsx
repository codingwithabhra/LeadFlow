import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { AiOutlineFileAdd } from "react-icons/ai";

const LeadCounts = () => {
  const { leads, users } = useLeadContext();

  const safeLeads = Array.isArray(leads) ? leads : [];
  const safeUsers = Array.isArray(users) ? users : [];

  const agents = safeUsers.filter((user) => user.role === "salesAgent");

  const totalLeads = safeLeads.length;

  const closedLeads = safeLeads.filter((lead) => lead.status === "closed").length;

  const pipelineLeads = totalLeads - closedLeads;

  return (
    <div className="row g-3 g-md-4 mb-4">
      <div className="col-6 col-lg-3">
        <div className="bg-white p-3 rounded shadow-sm">
          <small className="d-flex justify-content-between align-items-center">
            <span>Total Leads</span>
            <span>
              <AiOutlineFileAdd size={20} />
            </span>
          </small>
          <h3>{totalLeads}</h3>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="bg-white p-3 rounded shadow-sm">
          <small className="d-flex justify-content-between align-items-center">
            <span>In Pipeline</span>
            <span>
              <FaClockRotateLeft size={18} />
            </span>
          </small>
          <h3>{pipelineLeads}</h3>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="bg-white p-3 rounded shadow-sm">
          <small className="d-flex justify-content-between align-items-center">
            <span>Closed</span>
            <span>
              <IoLockClosedOutline size={20} />
            </span>
          </small>
          <h3>{closedLeads}</h3>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="bg-white p-3 rounded shadow-sm">
          <small className="d-flex justify-content-between align-items-center">
            <span>Total Agents</span>
            <span>
              <IoPersonOutline size={20} />
            </span>
          </small>
          <h3>{agents.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default LeadCounts;
