import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import ExercisesList from './ExercisesList';
import './Main.css';

function Main(props) {

  const [storage, setStorage] = useState(()=>JSON.parse(localStorage.getItem("Exarr")));
  if(!storage) setStorage([]);

  const remove = (program) =>{
    localStorage.setItem("Exarr", JSON.stringify(storage.filter((p) => p !== program)));
    setStorage(JSON.parse(localStorage.getItem("Exarr")));
  };

  console.log(storage.length)
  return (
    <div style={props.mainVisibility} className="Main">
      <div className="empty" style={storage.length > 0 ?
        {display: "none"} :
        {display: "flex", marginTop: "40%"}}>You don't have programs yet.</div>
      <ExercisesList
      icon1={"arrow"}
      icon2={"remove"}
      arr={storage}
      action1={program => props.startProgram(program)}
      action2={program => remove(program)}/>

      <div onClick={props.showCreateProgram} className="createBtn">NEW PROGRAM</div>
    </div>
  );
}

export default Main;