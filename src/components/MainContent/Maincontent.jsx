import React from "react";
import DashboardContent from "./DashboardContent";
import DashboardHeader from "./DashboardHeader";

const Maincontent = () => {

  return (
    <>
      <div>
        {/* HEADER */}
        <div className="filterButtons">
          <DashboardHeader />
        </div>

        {/* CONTENT */}
        <div className="filteredLead-list">
          <DashboardContent />
        </div>
      </div>
    </>
  );
};

export default Maincontent;
