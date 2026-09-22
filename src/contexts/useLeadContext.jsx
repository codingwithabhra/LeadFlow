import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../config/Config";

const LeadContext = createContext();
export const useLeadContext = () => useContext(LeadContext);

export const LeadsProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentuser, setCurrentuser] = useState(null);
  const [ error, setError ] = useState(null);
  const { leadId } = useParams();
  const findLead = Array.isArray(leads)
    ? leads.find((lead) => lead._id === leadId)
    : undefined;

  // console.log("this is from lead details page-- ", findLead);
  // console.log("this is from lead details page-- ", users);

  //getting user info
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${BASE_URL}/auth/user-profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCurrentuser(response.data.user);
        console.log(response.data.user);
      } catch (error) {
        console.error(error);

        setError(error.response?.data?.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  //getting all the lead info
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");

        // console.log("Token:", token);

        if (!token) {
          console.log("No token found. User is not authenticated.");
          setLeads([]);
          return;
        }

        const response = await axios.get(`${BASE_URL}/leads`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Leads response:", response.data);

        setLeads(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log("Error fetching leads:", error);
        console.log("Status:", error.response?.status);
        console.log("Backend message:", error.response?.data);

        setLeads([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, [currentuser]);

  //getting all the users info
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");
        const response = await axios.get(`${BASE_URL}/auth/userlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log("Error fetching users -- ", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // to add user to user list immediately after registration
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  //updating user info
  const updateUserRole = async (userId, role) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${BASE_URL}/auth/users/${userId}/role`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const updatedUser = response.data.user;

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === updatedUser._id ? updatedUser : user,
        ),
      );
      toast.success(`Role updated to '${role}'`);
      return response.data;
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Failed to update role");
    }
  };

  //updating lead info
  const updateLead = async (id, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/leads/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const updatedLead = response.data.updateLeadData;
      console.log("this is response data - ", response.data);
      setLeads((prev) =>
        prev.map((lead) =>
          lead._id === id ? { ...lead, ...updatedLead } : lead,
        ),
      );

      toast.success("Lead updated successfully");
      return updatedLead;
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Failed to update lead");
      return null;
    }
  };

  //delete lead
  const deleteLead = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BASE_URL}/leads/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //remove deleted lead from UI
      setLeads((prev) => prev.filter((lead) => lead._id !== id));

      toast.success("Lead deleted successfully");
    } catch (error) {
      console.log("Error deleting lead: ", error);
      toast.error("Failed to delete lead");
    }
  };

  //delete user
  const deleteUser = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BASE_URL}/auth/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //remove deleted agent from UI
      setUsers((prev) => prev.filter((user) => user._id !== id));

      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Failed to delete user");
    }
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        loading,
        findLead,
        users,
        setUsers,
        updateUserRole,
        updateLead,
        deleteLead,
        deleteUser,
        setLeads,
        addUser,
        currentuser,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};
