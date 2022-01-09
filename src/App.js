import { useState } from 'react';
import './App.css';

import Main from './Main';
import CreateProgram from './CreateProgram';
import Exercises from './Exercises';
import StartProgram from './StartProgram';

//sa

function App() {

  const visibilityOfComponents = {
    main: "none",
    createProgram: "none",
    exercices: "none",
    startProgram: "none"
  };

  const [currentDisplay, setCurrentDisplay] = useState({...visibilityOfComponents, main: "flex"});
  const [chosenExercises, setChosenExercises] = useState([]);
  const [runningProgram, setRunningProgram] = useState([]);

  const showCreateProgram = () => {setCurrentDisplay({...visibilityOfComponents, createProgram: "flex"})};
  const showChooseExercises = () => {setCurrentDisplay({...visibilityOfComponents, exercices: "flex"})};
  const showMain = () => {setCurrentDisplay({...visibilityOfComponents, main: "flex"})};
  const startProgram = (current) => {setCurrentDisplay({...visibilityOfComponents, startProgram: "flex"});
  setRunningProgram(current)};

  return (
    <div className="App">
      
      <Main 
      mainVisibility = {{display: currentDisplay.main}} 
      showCreateProgram={showCreateProgram}
      startProgram={startProgram}/>
      
      <CreateProgram 
      chosenExercises={chosenExercises}
      showChooseExercises={showChooseExercises}
      showMain={showMain}
      createProgramVisibility = {{display: currentDisplay.createProgram}}
      passSortedExercises={added => setChosenExercises(added)} />

      <Exercises
      showCreateProgram={showCreateProgram}
      exercisesVisibility ={{display: currentDisplay.exercices}}
      passAddedExercises={added => setChosenExercises(added)}
      chosenExercises={chosenExercises}/>

      <StartProgram
      showStartProgram={{display: currentDisplay.startProgram}}
      runningProgram={runningProgram}
      exit={showMain}/>
    </div>
  );
}

export default App;
