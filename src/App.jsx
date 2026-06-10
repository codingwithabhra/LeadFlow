import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Maincontent from "./components/Maincontent";

function App() {

  return (
    <>
      {/* Header */}
      {/* <header className="bg-white py-3 position-relative">
        <h1 className="fs-3 fw-bolder text-center m-0">LeadFlow</h1> */}

        {/* Toggle button (only visible on small screens) */}
        <button
          className="btn btn-primary d-lg-none position-absolute end-0 mx-2 my-2"
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
        style={{backgroundColor: "#003153"}}
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
      <main className="container-fluid">
        <div className="row">
          {/* Sidebar (Desktop only) */}
          <div className="col-lg-2 d-none d-lg-block px-0">
            <div className="h-100 rounded shadow-sm">
              <Sidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-lg-10 px-3">
            <div className="mt-3">
              <Maincontent />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
