import React from "react";
import { MdOutlineAssignmentInd } from "react-icons/md";


const AddAgentHeader = () => {
  return (
    <div className="filterBtn bg-white px-3 py-4 rounded shadow-sm mt-3 mb-5">
      <div className="heading-btns d-flex justify-content-between">
        <h2 className="text-secondary d-flex justify-content-center align-items-center">
          <span className="me-3">
            <MdOutlineAssignmentInd size={35} />
          </span>
          <span>Assign Role</span>
        </h2>
      </div>
    </div>
  );
};

export default AddAgentHeader;
