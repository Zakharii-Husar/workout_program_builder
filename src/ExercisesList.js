import './ExercisesList.css';
import {icons} from './data';
import {musclesGroups} from './data';
import React, { useState, useEffect } from 'react';


function ExercisesList(props) {
  const [exerciseIsDone, setExerciseIsDone] = useState([]);

  useEffect(()=>{
    setExerciseIsDone(exerciseIsDone)
  },[exerciseIsDone])

return(<div>
{props.arr.map((element, index) => {
        let source1;
        if(props.icon1 === "arrow") source1 = icons.arrow;
        if(props.icon1 === "exercise") source1 = element.img;
        if(props.icon1 === "muscle") source1 = element.img;

        let source2;
        if(props.icon2 === "add") source2 = icons.add;
        if(props.icon2 === "check") source2 = icons.check;
        if(props.icon2 === "remove") source2 = icons.remove;


        const markDone = () => {
          if(!exerciseIsDone.includes(index)){setExerciseIsDone([...exerciseIsDone, index])}
          else{setExerciseIsDone(exerciseIsDone.filter((e)=>{ return e !== index}))}
      }

      if (props.icon2 === "dot"){
        if(exerciseIsDone.includes(index)){source2 = icons.greendot}
        else{ source2 = icons.reddot}
      };
        
        return (
        <div style={props.style} className="exerciseslist">
          <img src={source1} className="icon1" />
          <div onClick={()=>props.action1(element)} className="name">{index + 1}.{element.name}</div>
          <img src={source2} onClick={()=>{props.action2(element, index); markDone()}} className="icon2" />
        </div>
        )
      })}
      </div>)
};

export default ExercisesList;