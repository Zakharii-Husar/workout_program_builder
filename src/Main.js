import { useEffect, useState } from 'react/cjs/react.development';
import ExercisesList from './ExercisesList';
import './Main.css';

function Main(props) {

  let storage = JSON.parse(localStorage.getItem("Exarr"));
  if(!storage) storage = {};
  // const [reRender, setReRender] = useState([storage]);

  const remove = (program) =>{
    localStorage.setItem("Exarr", JSON.stringify(storage.filter((p) => p !== program)));
    // setReRender(storage);
  };
  return (
    <div style={props.mainVisibility} className="Main">
      <ExercisesList
      icon1={"arrow"}
      icon2={"remove"}
      arr={storage}
      action1={program => props.startProgram(program)}
      action2={program => remove(program)}/>
      <div onClick={props.showCreateProgram} className="createBtn">CREATE PROGRAM+</div>
    </div>
  );
}

export default Main;