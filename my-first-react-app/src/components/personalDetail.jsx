import { useState } from "react";
import { Personal } from "./CV.jsx";
import { EducationInput } from "./Education.jsx";

let PersonalDetails;
function PersonalInput() {
  const [fname, setFname] = useState("fn");
  const [lname, setLname] = useState("ln");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  PersonalDetails = (
    <Personal
      Fname={fname}
      Lname={lname}
      Email={email}
      Phone={phoneNo}
      Address={address}
    />
  );
  return (
    <>
      <h1>PDt</h1>
      <form onSubmit={(e) => e.preventDefault()} className="   inputFields">
        <legend className="personalInputField">
          <span>Personal details</span>
          <label htmlFor="first">
            first name
            <input
              onChange={(e) => setFname(e.target.value)}
              value={fname}
              type="text"
            />
          </label>
          <label htmlFor="last">
            first name
            <input
              onChange={(e) => setLname(e.target.value)}
              value={lname}
              type="text"
            />
          </label>
          <label htmlFor="">
            Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </label>
          <label htmlFor="phone No">
            Phone NO :
            <input
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              maxLength={10}
              placeholder="10 digit number"
              pattern="[0-9]{10}"
              type="tel"
            />
          </label>
          <label htmlFor="">
            ADDRESS:
            <textarea
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            ></textarea>
          </label>
        </legend>

        <button>submit</button>
      </form>

      {PersonalDetails}
    </>
  );
}

export { PersonalInput };
