import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useLeadContext } from "../../contexts/useLeadContext";
// import { BASE_URL } from "../../config/Config";
import AddLeadHeader from "./AddLeadHeader";
import AddLeadForm from "./AddLeadForm";

const AddNewLead = () => {
  // const { setLeads } = useLeadContext();

  // const [name, setName] = useState("");
  // const [source, setSource] = useState("");
  // const [salesAgent, setSalesAgent] = useState("");
  // const [status, setStatus] = useState("");
  // const [priority, setPriority] = useState("");
  // const [timetoclose, settimetoclose] = useState("");
  // const [tags, setTags] = useState([]);
  // const [formdata, setFormdata] = useState(false);
  // const [agents, setAgents] = useState([]);

  // const tagOptions = ["hot", "cold", "urgent", "follow-up", "important"];

  // useEffect(() => {
  //   const fetchagents = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}/agent`);
  //       setAgents(response.data);
  //       console.log("Responses are --", response);
  //     } catch (error) {
  //       console.error("Error fetching agents:", error);
  //       toast.error("Failed to load sales agents");
  //     }
  //   };
  //   fetchagents();
  // }, []);

  // const handleform = async (e) => {
  //   e.preventDefault();

  //   if (
  //     name &&
  //     source &&
  //     salesAgent &&
  //     status &&
  //     priority &&
  //     timetoclose &&
  //     tags
  //   ) {
  //     try {
  //       const response = await axios.post(`${BASE_URL}`, {
  //         name,
  //         source,
  //         salesAgent,
  //         status,
  //         priority,
  //         timetoclose,
  //         tags,
  //       });

  //       // Refetch fresh data
  //       const updatedLeads = await axios.get(`${BASE_URL}`);

  //       setLeads(updatedLeads.data);

  //       console.log("Lead Created:", response.data);

  //       // Reset form after success
  //       setName("");
  //       setSource("");
  //       setSalesAgent("");
  //       setStatus("");
  //       setPriority("");
  //       settimetoclose("");
  //       setTags("");

  //       toast.success("Lead Created Successfully");
  //     } catch (error) {
  //       console.error("Error creating lead:", error);
  //       toast.error("Something went wrong ");
  //     }
  //   }
  // };

  return (
    <>
      <div>
        {/* filterBtn */}
        <div className="filterButtons">
          <AddLeadHeader />
        </div>

        {/* filtered list */}
        <div className="filteredLead-list">
          <AddLeadForm />
        </div>
      </div>
    </>
  );
};

export default AddNewLead;
