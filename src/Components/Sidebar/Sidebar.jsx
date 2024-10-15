import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faUserGraduate, faUserTie, faWindowRestore, faList, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import { addUser } from "../../Api/apiService";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

function Sidebar() {
  const location = useLocation();

  const userData = useSelector((state) => state.resume);

  const handleSubmit = async () => {
    try {
      const response = await addUser(userData);
      if (response.status === 200 || response.status === 201) {
        toast.success(response?.data?.message, {
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(error?.data?.message || "Something went wrong.", {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-inner-container">
        <div style={{ marginLeft: "3%" }}>
          <button className="sidebar">
            <Link to="/dashboard" className={`sidebar-link ${location.pathname === "/personalInfo" ? "active" : ""}`}>
              <FontAwesomeIcon icon={faArrowLeft} className="sidebar-back-icon" />
            </Link>
          </button>
          <div style={{ marginTop: "11%" }}>
            <button className="sidebar">
              <Link to="/personalInfo" className={`sidebar-link ${location.pathname === "/personalInfo" ? "active" : ""}`}>
                <FontAwesomeIcon icon={faCircleInfo} className="sidebar-icon" />
                <h3 className="sidebar-heading">Personal Information</h3>
              </Link>
            </button>
            <button className="sidebar">
              <Link to="/education" className={`sidebar-link ${location.pathname === "/education" ? "active" : ""}`}>
                <FontAwesomeIcon icon={faUserGraduate} className="sidebar-icon" />
                <h3 className="sidebar-heading">Education</h3>
              </Link>
            </button>
            <button className="sidebar">
              <Link to="/professionalExperience" className={`sidebar-link ${location.pathname === "/professionalExperience" ? "active" : ""}`}>
                <FontAwesomeIcon icon={faWindowRestore} className="sidebar-icon" />
                <h3 className="sidebar-heading">Professional Experience</h3>
              </Link>
            </button>
            <button className="sidebar">
              <Link to="/skills" className={`sidebar-link ${location.pathname === "/skills" ? "active" : ""}`}>
                <FontAwesomeIcon icon={faList} className="sidebar-icon" />
                <h3 className="sidebar-heading">Skills</h3>
              </Link>
            </button>
            <button className="sidebar">
              <Link to="/professionalSummary" className={`sidebar-link ${location.pathname === "/professionalSummary" ? "active" : ""}`}>
                <FontAwesomeIcon icon={faUserTie} className="sidebar-icon" />
                <h3 className="sidebar-heading">Professional Summary</h3>
              </Link>
            </button>
          </div>
        </div>
        <Button className="sidebar-submit-btn" onClick={handleSubmit}>
          <h4>Submit</h4>
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Sidebar;
