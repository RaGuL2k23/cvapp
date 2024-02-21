import { useState } from "react";
 
const workFieldInputs = [
  { id: Number.parseInt(Math.random()*33453), name: "Company Name" ,type:'text'},
  { id: Number.parseInt(Math.random()*33453), name: "Position  Title",type:'text' },
  { id: Number.parseInt(Math.random()*33453), name: "responsibilities of your jobs",type:'text' },
  { id: Number.parseInt(Math.random()*33453), name: "From Date", type: "date" },
  { id: Number.parseInt(Math.random()*33453), name: "To Date", type: "date" },
];
// set value to and obj with prop id { id: value }
const   initialState = {};
workFieldInputs.forEach(e=>{
  
    initialState[e.id]='';//value default is [id] = value of obj
})

function WorkInputField() {
    const [value,setValue] = useState({});
    //value above stores value of each input field accessed via inputfield id

    function handleChange(id,value){
        setValue(prevValue=>({
            ...prevValue,[id]:value
        }))
    }

  return (
    <>
      <h1>Work Experience</h1>
      {workFieldInputs.map((obj) => {
        return (
          <label key={obj.id} htmlFor="">
            
            {obj.name}
            <input onChange={(e) => handleChange(obj.id, e.target.value)} value={value[obj.id]} type={obj.type} />
          </label>
        );
      })}
       {/**nice if this would send only props to a
        * function and that function manages what to 
        * render with those props in an orderly manner 
        */}
       <p> {workFieldInputs.map(obj=><h2 key={obj.id}>{value[obj.id]}</h2>)}</p>
    </>
  );
}

export { WorkInputField };
