import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

const AddLeadHeader = () => {
  return (
    <div className="filterBtn bg-white px-3 py-4 rounded shadow-sm mt-3 mb-5">
      <div className="heading-btns d-flex justify-content-between">
        <h2 className="text-secondary d-flex justify-content-center align-items-center">
          <span className="me-3">
            <AiOutlineFileAdd size={35} />
          </span>
          <span>Add New Lead</span>
        </h2>
      </div>
    </div>
  );
};

export default AddLeadHeader;
