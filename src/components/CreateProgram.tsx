import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useValidation } from '../hooks/useValidation';
import { ProgramService } from '../services/programService';
import { LoadingSpinner } from './LoadingSpinner';
import ExercisesList from './ExercisesList';
import { icons } from '../data/data';
import './CreateProgram.css';

const CreateProgram: React.FC = () => {
  const { state, actions } = useApp();
  const { chosenExercises } = state;
  const { validateProgram, getError, clearErrors, hasErrors } = useValidation();
  
  const [name, setName] = useState('My Workout');
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveProgram = async () => {
    clearErrors();
    
    const program = ProgramService.createProgram(name, timer, chosenExercises);
    const validation = ProgramService.validateProgram(program);
    
    if (!validation.isValid) {
      validation.errors.forEach(error => {
        console.error('Validation error:', error);
      });
      alert(validation.errors.join('\n'));
      return;
    }

    setIsLoading(true);
    
    try {
      actions.addProgram(program);
      alert('The program has been saved!');
      actions.showMain();
      // Reset form
      setName('My Workout');
      setTimer(0);
      actions.setChosenExercises([]);
    } catch (error) {
      console.error('Error saving program:', error);
      alert('Failed to save program. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    actions.showMain();
  };

  const handleTimerChange = (increment: number) => {
    const newTimer = timer + increment;
    if (newTimer >= 0) {
      setTimer(newTimer);
    }
  };

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  if (isLoading) {
    return (
      <div style={{ display: state.currentDisplay.createProgram }}>
        <LoadingSpinner message="Saving program..." />
      </div>
    );
  }

  return (
    <div style={{ display: state.currentDisplay.createProgram }}>
      <div className="CreateProgram">
        <div className="chosenExercises">
          <ExercisesList
            arr={chosenExercises}
            action1={() => {}}
            action2={() => {}}
            icon1="exercise"
            icon2="check"
          />
        </div>

        <button 
          className="addExercises" 
          onClick={actions.showChooseExercises}
        >
          {chosenExercises.length > 0 ? 'Edit Exercises' : 'Add Exercises'}
        </button>

        <h1 className="timerHeader">Time between sets</h1>
        <div className="setTimer">
          <div>{formatTime(timer)}</div>
          <div className="editTime">
            <img 
              src={icons.up} 
              onClick={() => handleTimerChange(15)}
              alt="Increase timer"
            />
            <img 
              src={icons.down} 
              onClick={() => handleTimerChange(-15)}
              alt="Decrease timer"
            />
          </div>
        </div>

        <div className="nameContainer">
          <h1 className="nameOutput">{name}</h1>
          <input
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
            type="text"
            placeholder="Enter program's name"
            value={name}
          />
        </div>

        <div className="cancelOrSave">
          <img 
            src={icons.remove} 
            onClick={handleCancel}
            alt="Cancel"
          />
          <img 
            src={icons.check} 
            onClick={handleSaveProgram}
            alt="Save"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProgram;
