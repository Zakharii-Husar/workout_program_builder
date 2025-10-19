import { useState } from 'react';
import { useEffect } from 'react';
import Timer from './Timer';
import ExercisesList from './ExercisesList';
import './StartProgram.css';

function StartProgram(props) {

    let runningProgram = props.runningProgram.exercises;
    if(!runningProgram) runningProgram = [];

  return (
    <div style={props.showStartProgram} className="StartProgram">
        <Timer time={props.runningProgram.timer}/>

        <ExercisesList
        arr = {runningProgram}
        icon1 = {"exercise"}
        icon2 = {"dot"}
        action1 = {()=>{}}
        action2 = {()=>{}}/>

        <button className="exitBtn"
        onClick={props.exit}>Exit</button>
    </div>
  );
}

export default StartProgram;