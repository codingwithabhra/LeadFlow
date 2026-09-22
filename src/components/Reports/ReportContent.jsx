import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend,
  LinearScale,
} from "chart.js";
import { useLeadContext } from "../../contexts/useLeadContext";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import PieChart2 from "./PieChart2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  BarElement,
  LinearScale,
  Tooltip,
  Legend,
);

const ReportContent = () => {
  const { leads, users } = useLeadContext();
  const agents = users.filter((user) => user.role === "salesAgent");
  console.log("REport page -- ", leads);
  
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

  const bardata = {
    labels: agents.map((agent) => agent.name) || [],
    datasets: [
      {
        label: "# of Leads Closed",
        data:
          agents?.map(
            (agent) =>
              leads.filter(
                (lead) =>
                  lead.salesAgent?._id === agent._id && lead.status === "closed",
              ).length,
          ) || [],
        backgroundColor: "rgba(0, 128, 0, 1)",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const piedata = {
    labels: ["In Pipeline", "Closed"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          leads.filter((lead) => lead.status !== "closed").length,
          leads.filter((lead) => lead.status === "closed").length,
        ],
        backgroundColor: ["rgba(75, 192, 192, 1)", "rgba(255, 255, 0, 1)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <>
      <div className="content-area">
        <div className="row">
          {/* PIE CHART */}
          <div className="col-12 col-md-6">
            <div className="bg-white px-3 py-4 mb-4 rounded shadow-sm">
              <div className="container text-center">
                <h4 className="mb-3">Total Leads Closed and in Pipeline :</h4>

                <div className="chart mx-auto my-2">
                  <PieChart
                    data={piedata}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      ...options,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PIE CHART 2 */}
          <div className="col-12 col-md-6">
            <div className="bg-white px-3 py-4 mb-3 rounded shadow-sm">
              <div className="container text-center">
                <h4 className="mb-3">Lead Status Distribution :</h4>

                <div
                  className="chart mx-auto my-2"
                  style={{
                    width: "100%",
                    maxWidth: "420px",
                  }}
                >
                  <PieChart2
                    data={piedata2}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      ...options,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="bg-white my-2 px-3 py-4 mb-4 rounded shadow-sm">
          <div className="container text-center">
            <h4 className="mb-3">Leads Closed by Sales Agent :</h4>
            <div
              className="chart mx-auto my-2"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "700px",
                height: "auto",
              }}
            >
              <BarChart
                data={bardata}
                className="py-3"
                options={options}
                style={{ color: "black" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportContent;
