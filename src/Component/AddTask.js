import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../js/action";
import './Addtask.css'

const AddTask = ({toggle,filter}) => {
  const [item, setItem] = useState("");
  const titleTask = (e) => {
    setItem(e.target.value);
  };
  const dispatch = useDispatch();
  const add=()=>{
    if(item!=="")
    {dispatch(addtask({ task: item, id: Math.random(), isDone: false }));
  setItem("")}
  else
  {alert("Please add your to do !") } }
  return (
    
    <div className='Addtask'>
      
      <input type="text" placeholder="Add new to do..." onChange={titleTask} value={item}/>
      <button
        onClick={add}>
        Add {" "}
      </button>
      <button onClick={toggle}  style={{backgroundColor:'royaleblue'}}>{filter?"Done":"select"}</button>
    </div>
    
    
  );
};

export default AddTask;
