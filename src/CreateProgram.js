import React, { useState } from 'react';
import { useEffect } from 'react';
import ExercisesList from './ExercisesList';
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
<div style={props.createProgramVisibility} 
className="CreateProgram">

<div className="chosenExercises">

<ExercisesList
 arr={props.chosenExercises}
 action1 = {()=>{}}
 action2 = {()=>{}}
 icon1={"exercise"}
 icon2={"check"}/>
</div>
      
      <button onClick={props.showChooseExercises}>{props.chosenExercises.length > 0 ? "Edit Exercises" : "Add Exercises"}</button>

<div className="setTimer">
        <h2>Rest Time</h2>
        <h1>{minutes}:{seconds}</h1>
        <div>
        <span onClick={()=>{if (timer >= 15) setTimer(timer - 15)}}>-</span>
        <span onClick={()=>setTimer(timer + 15)}>+</span>
        </div>
      </div>

      <div className="nameContainer">
        <h1>{name}</h1>
        <input 
        onInput={e=>setName(e.target.value)}
        type="text" 
        placeholder="Program's name">
        </input>
      </div>

      <button onClick={cancel}>Cancel</button>
      <button onClick={saveProgram}>Save</button>
    </div>
  );
}

export default CreateProgram;