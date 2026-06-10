import React from "react";
import Sidebar from "../components/Sidebar";
import Leadoverview from "../components/Leadoverview";
import Filterleadbuttons from "../components/Filterleadbuttons";
import Sidebar2 from "../components/Sidebar2";

const Leads = () => {
  return (
    <>
      {/* <header className="bg-white py-3 position-relative shadow-sm">
        <h1 className="fs-2 text-center text-dark m-0">Lead List</h1> */}

        {/* Toggle button (only visible on small screens) */}
        <button
          className="btn btn-primary d-lg-none position-absolute top-50 start-0 translate-middle-y ms-3"
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
      <main className="container-fluid px-0">
        <div className="row g-0">
          {/* Sidebar (Desktop only) */}
          <div className="col-lg-2 d-none d-lg-block">
            <div className="h-100 rounded shadow-sm">
              <Sidebar2 />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-lg-10 px-1">
            <div className="mx-3">
              <div>
                <Leadoverview />
              </div>
              <div className="my-4">
                <Filterleadbuttons />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Leads;
