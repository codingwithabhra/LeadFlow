import React from "react";
import AddAgentHeader from "./AddAgentHeader"
import AddAgentList from "./AddAgentList";

const AddNewAgent = () => {
  return (
    <div>
      {/* filterBtn */}
      <div className="filterButtons">
        <AddAgentHeader />
      </div>

      {/* filtered list */}
      <div className="filteredLead-list">
        <AddAgentList />
      </div>
    </div>
  );
};

export default AddNewAgent;
