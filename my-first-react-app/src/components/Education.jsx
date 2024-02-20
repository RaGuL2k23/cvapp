import { useState } from "react";
import { Education } from "./CV.jsx";

function EducationInput() {
  const [schoolName, setSchoolName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [CGPA, setCGPA] = useState("");

  let v = (
    <Education
      schoolName={schoolName}
      collegeName={collegeName}
      courseName={courseName}
      CGPA={CGPA}
    />
  );
  return (
    <>
      <legend className="education">
        <h1>Education</h1>
        <h2>school/College</h2>
        <label>
          School Name :
          <input
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            type="text"
          />
        </label>
        <label>
          College Name :
          <input
            type="text"
            onChange={(e) => setCollegeName(e.target.value)}
            value={collegeName}
          />
        </label>
        <label>
          course Name :
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </label>
        <label htmlFor="">
          CGPA
          <input
            type="tel"
            maxLength="5"
            value={CGPA}
            onChange={(e) => setCGPA(e.target.value)}
          />
        </label>
      </legend>
      {v}
    </>
  );
}
export { EducationInput };
