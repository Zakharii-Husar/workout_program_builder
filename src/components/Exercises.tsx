import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ExerciseService } from '../services/exerciseService';
import { LoadingSpinner } from './LoadingSpinner';
import ExercisesList from './ExercisesList';
import { icons } from '../data/data';
import { 
  ExercisesContainer, 
  MuscleName, 
  ChosenExercisesContainer, 
  ChosenExercise, 
  ControlButtons,
  MuscleGroupContainer,
  MuscleIcon,
  ArrowIcon,
  MuscleNameText
} from './Exercises.styled';

const Exercises: React.FC = () => {
  const { state, actions } = useApp();
  const { chosenExercises } = state;
  
  const [visibleExercises, setVisibleExercises] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const muscleGroups = ExerciseService.getAllMuscleGroups();

  const handleAddExercise = (exercise: any) => {
    const updatedExercises = ExerciseService.addExerciseToProgram(chosenExercises, exercise);
    actions.setChosenExercises(updatedExercises);
  };

  const handleRemoveExercise = (exercise: any, index: number) => {
    const updatedExercises = ExerciseService.removeExerciseFromProgram(chosenExercises, exercise, index);
    actions.setChosenExercises(updatedExercises);
  };

  const handleRemoveLastExercise = () => {
    if (chosenExercises.length > 0) {
      const updatedExercises = chosenExercises.slice(0, -1);
      actions.setChosenExercises(updatedExercises);
    }
  };

  const handleClearAll = () => {
    actions.setChosenExercises([]);
    actions.showCreateProgram();
  };

  const handleSave = () => {
    actions.showCreateProgram();
  };

  const toggleExercisesVisibility = (muscleIndex: number) => {
    setVisibleExercises(prev => 
      prev.includes(muscleIndex)
        ? prev.filter(index => index !== muscleIndex)
        : [...prev, muscleIndex]
    );

    // Smooth scroll to the muscle group
    setTimeout(() => {
      window.scrollBy({
        top: muscleIndex * 100,
        behavior: 'smooth'
      });
    }, 10);
  };

  if (isLoading) {
    return (
      <div style={{ display: state.currentDisplay.exercises }}>
        <LoadingSpinner message="Loading exercises..." />
      </div>
    );
  }

  return (
    <ExercisesContainer style={{ display: state.currentDisplay.exercises }}>
      <ChosenExercisesContainer>
        <ChosenExercise>
          {chosenExercises.map((exercise, index) => (
            <img 
              key={`${exercise.name}-${index}`}
              src={exercise.img} 
              alt={exercise.name}
            />
          ))}
        </ChosenExercise>
      </ChosenExercisesContainer>

      {muscleGroups.map((muscle, muscleIndex) => (
        <div key={muscle.name}>
          <MuscleGroupContainer>
            <MuscleIcon src={muscle.img} alt={muscle.name} />
            <MuscleNameText>{muscle.name}</MuscleNameText>
            <ArrowIcon 
              src={icons.arrow} 
              onClick={() => toggleExercisesVisibility(muscleIndex)}
              alt="Toggle exercises"
            />
          </MuscleGroupContainer>
          
          <ExercisesList
            style={visibleExercises.includes(muscleIndex) ? 
              { display: "flex", opacity: 1 } : 
              { display: "none", opacity: 0 }
            }
            arr={muscle.exercises}
            icon1="exercise"
            icon2="add"
            action1={() => {}}
            action2={handleAddExercise}
          />
        </div>
      ))}

      <ControlButtons>
        <img 
          src={icons.cancel} 
          onClick={handleClearAll}
          alt="Cancel"
        />
        <img 
          src={icons.correct}
          onClick={handleRemoveLastExercise}
          style={chosenExercises.length > 0 ? 
            { display: "flex" } : 
            { display: "none" }
          }
          alt="Remove last exercise"
        />
        <img 
          src={icons.save} 
          onClick={handleSave}
          alt="Save"
        />
      </ControlButtons>
    </ExercisesContainer>
  );
};

export default Exercises;
