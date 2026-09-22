import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

const Charts = () => {
  const { leads = [], users = [] } = useLeadContext();

  const totalLeads = leads.length;

  const closedLeads = leads.filter((lead) => lead.status === "closed").length;

  const pipelineLeads = totalLeads - closedLeads;

  const pipelineData = {
    labels: ["In Pipeline", "Closed"],

    datasets: [
      {
        data: [pipelineLeads, closedLeads],

        backgroundColor: [
          "rgba(34, 139, 34, 0.9)", // In Pipeline
          "rgba(255, 0, 0, 0.9)", // Closed
        ],

        borderColor: ["rgba(176, 224, 230, 1)", "rgba(75, 192, 192, 1)"],

        borderWidth: 1,
      },
    ],
  };

  const piedata2 = {
    labels: ["New", "Contacted", "Qualified", "Proposal Sent", "Closed"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          leads.filter((lead) => lead.status === "new").length,
          leads.filter((lead) => lead.status === "contacted").length,
          leads.filter((lead) => lead.status === "qualified").length,
          leads.filter((lead) => lead.status === "proposal sent").length,
          leads.filter((lead) => lead.status === "closed").length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(75, 192, 192, 0.9)",
          "rgba(153, 102, 255, 0.9)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {/* CHART ROW */}
      <div className="row g-3 mb-4">
        {/* PIPELINE */}
        <div className="col-12 col-lg-5">
          <div className="bg-white p-3 rounded shadow-sm h-100">
            <h5>Lead Pipeline</h5>

            <div style={{ height: "280px" }}>
              <DoughnutChart
                data={pipelineData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* STATUS */}
        <div className="col-12 col-lg-7">
          <div className="bg-white p-3 rounded shadow-sm h-100">
            <h5>Lead Status</h5>

            <div style={{ height: "280px" }}>
              <BarChart
                data={piedata2}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  indexAxis: "y",
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
