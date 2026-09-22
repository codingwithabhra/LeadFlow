import React from "react";
import LeaddetailHeader from "./LeaddetailHeader";
import LeadDetails from "./LeadDetails";
import Comments from "./Comments";

const LeaddetailComponent = () => {
  return (
    <div>
      {/* search by name */}
      <div className="filterButtons">
        <LeaddetailHeader />
      </div>

      {/* agent list */}
      <div className="row g-3">
        {/* Lead Details */}
        <div className="col-12 col-lg-7">
          <LeadDetails />
        </div>

        {/* Comments */}
        <div className="col-12 col-lg-5">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default LeaddetailComponent;
