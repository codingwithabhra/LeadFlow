import React from "react";
import { useLeadContext } from "../../contexts/useLeadContext";
import { useParams } from "react-router-dom";
import { IoNewspaperOutline } from "react-icons/io5";

const LeaddetailHeader = () => {
  const { leads } = useLeadContext();
  const { leadId } = useParams();

  const findLead = leads?.find((lead) => lead._id === leadId);

  return (
    <div className="filterBtn bg-white px-3 py-4 rounded shadow-sm mt-1 mt-sm-3 mb-3 mb-sm-5">
      <div className="heading-btns d-flex justify-content-between">
        <h2 className="text-secondary d-flex justify-content-center align-items-center">
          <span className="me-3"><IoNewspaperOutline size={35} /></span>
          <span>{findLead.name}</span>
        </h2>
      </div>
    </div>
  );
};

export default LeaddetailHeader;
