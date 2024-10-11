import React, { useState } from "react";
import ResumeHoc from "../../Components/Hoc/ResumeHoc";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function ProfessionalSummary() {
  const [certification, setCertification] = useState([{ certification: "", collapsed: false }]);

  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate("/skills");
  };

  const handlePlusClick = () => {
    const updatedFields = certification.map((field, index) => (index === 0 ? { ...field, collapsed: true } : field));
    setCertification([{ certification: "", collapsed: false }, ...updatedFields]);
  };

  const handleDeleteClick = (index) => {
    const updatedFields = certification.filter((_, i) => i !== index);
    setCertification(updatedFields);
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = certification.map((field, i) => (i === index ? { ...field, [fieldName]: value } : field));
    setCertification(updatedFields);
  };

  return (
    <div className="resume-form">
      <div className="resume-professional-experience">
        <h1 className="resume-form-title">Professional Summary</h1>
        <div className="grid-container-1-col">
          <Input label="Summary" name="summary" type="textarea" className="resume-form-input-field" margin="1%" />
        </div>

        <h1 className="resume-form-title">Awards / Certifications</h1>
        <div className="resume-form-header">
          <FontAwesomeIcon icon={faPlus} className="resume-plus-icon" onClick={handlePlusClick} />
        </div>

        <div className="resume-entry">
          {!certification[0].collapsed && (
            <>
              <div className="grid-container-1-col">
                <Input
                  label="Certification"
                  name="certification"
                  type="text"
                  className="resume-form-input-field"
                  value={certification[0].certification}
                  onChange={(e) => handleFieldChange(0, "certification", e.target.value)}
                  margin="1%"
                />
              </div>
            </>
          )}
        </div>

        {certification.slice(1).map((field, index) => (
          <div key={index + 1} className="resume-entry">
            <div className="resume-form-header">
              <Input
                label="Certification"
                name={`certification-${index + 1}`}
                type="text"
                className="resume-form-input-field"
                value={field.certification}
                onChange={(e) => handleFieldChange(index + 1, "certification", e.target.value)}
              />
              <FontAwesomeIcon icon={faTrash} className="resume-delete-icon" onClick={() => handleDeleteClick(index + 1)} />
            </div>
          </div>
        ))}
      </div>
      <div className="resume-form-btn">
        <Button onClick={handlePrevClick}>Previous</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
}

export default ResumeHoc(ProfessionalSummary);