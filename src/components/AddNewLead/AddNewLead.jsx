import React from "react";
import AddLeadHeader from "./AddLeadHeader";
import AddLeadForm from "./AddLeadForm";

const AddNewLead = () => {

  return (
    <>
      <div>
        {/* Header */}
        <div className="filterButtons">
          <AddLeadHeader />
        </div>

        {/* Add Lead form */}
        <div className="filteredLead-list">
          <AddLeadForm />
        </div>
      </div>
    </>
  );
};

export default AddNewLead;
