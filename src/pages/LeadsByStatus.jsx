import React from "react";
import Sidebar from "../components/Sidebar";
import ListbyStatusContent from "../components/ListbyStatusContent";
import Sidebar2 from "../components/Sidebar2";

const LeadsByStatus = () => {
  return (
    <>
      {/* <header className="bg-white py-3 position-relative shadow-sm">
        <h1 className="fs-2 text-center text-dark m-0">Leads By Status</h1> */}

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
        <div className="row g-3">
          {/* Sidebar (Desktop only) */}
          <div className="col-lg-2 d-none d-lg-block px-0">
            <div className="h-100 rounded shadow-sm">
              <Sidebar2 />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-lg-10 px-3">
            <div className="my-3">
              <div>
                <ListbyStatusContent />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LeadsByStatus;
