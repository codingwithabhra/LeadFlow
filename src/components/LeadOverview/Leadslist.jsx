import React from "react";
import Filterleadbuttons from "./Filterleadbuttons";
import Leadoverview from "./Leadoverview";

const Leadslist = () => {

  return (
    <div>
      {/* filterBtn */}
      <div className="filterButtons">
        <Filterleadbuttons />
      </div>

      {/* filtered list */}
      <div className="filteredLead-list">
        <Leadoverview />
      </div>
    </div>
  );
};

export default Leadslist;
