import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../components/Sidebar";
import Sidebar2 from "../components/Sidebar2";
import { useLeadContext } from "../contexts/useLeadContext";

const AddAgents = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { fetchAgents } = useLeadContext([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email) {
      try {
        const response = await axios.post(
          "https://agent-three-pi.vercel.app/agent",
          {
            name: name,
            email: email,
          },
        );

        //Refetch updated list
        fetchAgents();

        console.log("Agent Created:", response.data);

        // Reset form after success
        setName("");
        setEmail("");

        toast.success("Agent Created Successfully");
      } catch (error) {
        console.error("Error creating agent:", error);
        toast.error("Something went wrong ");
      }
    }
  };

  return (
    <>
      {/* Header */}
      {/* <header className="bg-white py-3 position-relative">
        <h1 className="fs-3 fw-bold text-center m-0">Add New Sales Agent</h1> */}

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
        <div className="row g-3">
          {/* Sidebar (Desktop only) */}
          <div className="col-lg-2 d-none d-lg-block">
            <div
              className="rounded shadow-sm"
              style={{ height: "100%", minHeight: "100vh" }}
            >
              <Sidebar2 />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-12 col-lg-10">
            <div className="container mt-3">
              <div className="bg-white p-4 mx-auto rounded shadow-sm">
                <h2 className="text-secondary">Add Agent</h2>
                <hr />

                {/* FORM */}
                <form className="py-5 px-5" onSubmit={handleSubmit}>
                  {/* LEAD NAME */}
                  <div className="row align-items-center pb-4">
                    <div className="col-md-4">
                      <label className="form-label">Agent Name :</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        required
                        value={name}
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="col-12 col-lg-9"></div>
                  <div className="row align-items-center pb-4">
                    <div className="col-md-4">
                      <label className="form-label">Email :</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        value={email}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="d-block mx-auto mt-4 btn btn-primary py-2 px-4"
                  >
                    Create Agent
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddAgents;
