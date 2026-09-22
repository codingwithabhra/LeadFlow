import React from "react";
import CompleteLeadList from "./CompleteLeadList";
import CompleteAgentList from "./CompleteAgentList";

const SettingComponent = () => {
  return (
    <div className="g-3">
      {/* lead list */}
      <div className="filterButtons">
        <CompleteLeadList />
      </div>

      {/* agent list */}
      <div className="filteredLead-list">
        <CompleteAgentList />
      </div>
    </div>
  );
};

export default SettingComponent;
