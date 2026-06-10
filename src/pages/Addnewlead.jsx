import React from "react";
import AddNewLead from "../components/AddNewLead";
import Sidebar2 from "../components/Sidebar2";
import Sidebar from "../components/Sidebar";

const Addnewlead = () => {

  return (
    <>
      {/* Header */}

        {/* Toggle button (only visible on small screens) */}
        <button
          className="btn btn-primary d-lg-none position-absolute top-100 end-0 mx-2 my-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
        >
          ☰
        </button>
      {/* </header> */}

      {/* Sidebar Offcanvas (Mobile) */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex="-1"
        id="mobileSidebar"
        style={{ backgroundColor: "#003153" }}
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close bg-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Sidebar />
        </div>
      </div>

      {/* Desktop Layout */}
      <main className="container-fluid p-0 overflow-hidden">
        <div className="row">
          {/* Sidebar (Desktop only) */}
          <div className="col-lg-2 d-none d-lg-block">
            <div className="rounded shadow-sm" style={{height: "100%", minHeight: "100vh"}}>
              <Sidebar2 />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-lg-10">
            <div className="container mt-3">
              <AddNewLead />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Addnewlead;
