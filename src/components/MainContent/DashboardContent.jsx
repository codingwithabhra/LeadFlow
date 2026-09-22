import React from "react";
import DashboardLeads from "./DashboardLeads";
import LeadCounts from "./LeadCounts";
import Charts from "./Charts";
import NewLeads from "./NewLeads";
import Salesagents from "./Salesagents";

const DashboardContent = () => {
  return (
    <div>
      <LeadCounts />

      {/* Charts */}
      <Charts />

      {/* Leads + Agents */}
      <div className="leads-agents row g-3">
        <div className="col-12 col-md-6 col-lg-6">
          <NewLeads />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <Salesagents />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
