import React from "react";
import AddNewLead from "../components/AddNewLead/AddNewLead";
import Sidebar2 from "../components/Sidebars/Sidebar2";
import Sidebar from "../components/Sidebars/Sidebar";

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
      <main className="main-layout">
        {/* Sidebar */}
        <aside className="main-sidebar d-none d-lg-block">
          <Sidebar2 />
        </aside>
        {/* Main Content */}
        <section className="main-content">
          <AddNewLead />
        </section>
      </main>
    </>
  );
};

export default Addnewlead;
