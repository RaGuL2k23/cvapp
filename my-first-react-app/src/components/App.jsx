import { useState } from "react";

import { PersonalInput } from "./personalDetail";
import { EducationInput } from "./Education";
import { WorkInputField } from "./workExp";

function App() {
  return (
    <>
      <PersonalInput />
      <EducationInput />
      <WorkInputField />
    </>
  );
}

export default App;
