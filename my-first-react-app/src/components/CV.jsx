//this module is for grouping all end
//products as props
function Personal({ Fname, Lname, Email, Phone, Address }) {
  return (
    <div className="">
      <div className="personal">
        <br />
        <p>{Fname + " " + Lname}</p>
        <p>{Email}</p>
        <p>{Phone}</p>
        <p>{Address}</p>
      </div>
    </div>
  );
}
function Education({ schoolName, collegeName, courseName, CGPA }) {
  return (
    <>
      <div className="education">
        <p>Education</p>
        <p>{schoolName}</p>
        <p>{collegeName}</p>
        <p>{courseName}</p>
        <p>{CGPA}</p>
      </div>
    </>
  );
}

export { Personal, Education };
