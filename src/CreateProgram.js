import React, { useState } from 'react';
import { useEffect } from 'react';
import ExercisesList from './ExercisesList';
import {icons} from './data';
import './CreateProgram.css';


function CreateProgram(props) {
  let defaultName = "My Workout";

  const [name, setName] = useState(defaultName);
  const [timer, setTimer] = useState(0);

  const PROGRAM = {
    name: name,
    timer: timer,
    exercises: props.chosenExercises
  };


  useEffect(()=>{
    PROGRAM.name = name;
    PROGRAM.timer = timer;
    PROGRAM.exercises = props.chosenExercises;
  },[props.chosenExercises, timer, name]);


  let minutes = Math.floor(timer / 60);
  let seconds = timer - minutes * 60;
  if (seconds == 0) seconds = "00";
  if (minutes < 10) minutes = "0" + minutes;

  const saveToLocalStorage = () => {
    let localStorageArray = JSON.parse(localStorage.getItem("Exarr"));
    if(!localStorageArray) localStorageArray = [];
    localStorage.setItem("Exarr", JSON.stringify([...localStorageArray, PROGRAM]));
  };

  const saveProgram = () => {
    if(PROGRAM.name && PROGRAM.timer && PROGRAM.exercises.length !== 0){
      saveToLocalStorage();
      alert("The program has been saved!");
      window.location.reload();
    };
    if(!PROGRAM.name) alert("Enter program name!");
    if(!PROGRAM.timer) alert("Set the rest time between sets!");
    if(PROGRAM.exercises.length == 0) alert("Add exercises to your program!");
  };

  const cancel = () => {
    props.showMain();
  }
  

  return (
<div style={props.createProgramVisibility}>
 <div className="CreateProgram">
<div className="chosenExercises">

<ExercisesList
 arr={props.chosenExercises}
 action1 = {()=>{}}
 action2 = {()=>{}}
 icon1={"exercise"}
 icon2={"check"}/>
</div>
      
      <button className="addExercises" onClick={props.showChooseExercises}>
        {props.chosenExercises.length > 0 ? 
        "Edit Exercises" :
         "Add Exercises"}</button>
         
<h1 className="timerHeader">Time between sets</h1>
<div className="setTimer">
        <div>{minutes}:{seconds}</div>
        <div className="editTime">
          <img src={icons.up} onClick={()=>setTimer(timer + 15)}/>
          <img src={icons.down} onClick={()=>{if (timer >= 15) setTimer(timer - 15)}}/>
        </div>
</div>

      <div className="nameContainer">
        <h1 className="nameOutput">{name}</h1>
        <input
        onInput={e=>setName(e.target.value)}
        type="text" 
        placeholder="Enter program's name">
        </input>
      </div>
      
      <div className="cancelOrSave">
        <img src={icons.remove} onClick={cancel}/>
        <img src={icons.check} onClick={saveProgram}/>
      </div>
      
      </div>
    </div>
  );
}

export default CreateProgram;