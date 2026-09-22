import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Leads from "./pages/Leads.jsx";
import Addnewlead from "./pages/Addnewlead.jsx";
import { ToastContainer } from "react-toastify";
import Leaddetails from "./pages/Leaddetails.jsx";
import { LeadsProvider } from "./contexts/useLeadContext.jsx";
import { FilterProvider } from "./contexts/filterContext.jsx";
import AgentManagement from "./pages/AgentManagement.jsx";
import AddAgents from "./pages/AddAgents.jsx";
import Reports from "./pages/Reports.jsx";
import LeadsByAgents from "./pages/LeadsByAgents.jsx";
import Settings from "./pages/Settings.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SigninByEmail from "./pages/SigninByEmail.jsx";
import CreateMyAccount from "./components/signin/CreateMyAccount.jsx";
import SalesPage from "./pages/SalesPage.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signinbyemail",
    element: <SigninByEmail />,
  },
  {
    path: "/createmyaccount",
    element: <CreateMyAccount />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/leads",
    element: <Leads />,
  },
  {
    path: "/leads/addnewlead",
    element: <Addnewlead />,
  },
  {
    path: "/leads/leaddetails/:leadId",
    element: <Leaddetails />,
  },
  {
    path: "/leads/agents",
    element: <AgentManagement />,
  },
  {
    path: "/leads/agents/addagent",
    element: <AddAgents />,
  },
  {
    path: "/leads/reports",
    element: <Reports />,
  },
  {
    path: "/leads/sales",
    element: <SalesPage />,
  },
  {
    path: "/leads/leadsbyagent/:agentId",
    element: <LeadsByAgents />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/myprofile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <FilterProvider>
        <LeadsProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </LeadsProvider>
      </FilterProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
);
