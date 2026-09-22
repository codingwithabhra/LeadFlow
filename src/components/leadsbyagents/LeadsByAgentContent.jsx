import React from "react";
import Leadlistbyagent from "./Leadlistbyagent";
import Headers from "./Headers";

const LeadsByAgentContent = () => {
  return (
    <div>
      {/* header */}
      <div className="filterButtons">
        <Headers />
      </div>

      {/* lead list */}
      <div className="filteredLead-list">
        <Leadlistbyagent />
      </div>
    </div>
  );
};

export default LeadsByAgentContent;
