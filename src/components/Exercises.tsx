import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ExerciseService } from '../services/exerciseService';
import { LoadingSpinner } from './LoadingSpinner';
import ExercisesList from './ExercisesList';
import { icons } from '../data/data';
import { 
  ExercisesContainer, 
  ChosenExercisesContainer, 
  ChosenExercise, 
  ExerciseContainer,
  ExerciseCountBadge,
  ControlButtons,
  MuscleGroupContainer,
  MuscleIcon,
  ArrowIcon,
  MuscleNameText,
  ControlButton
} from './Exercises.styled';

const Exercises: React.FC = () => {
  const { state, actions } = useApp();
  const { chosenExercises } = state;
  const navigate = useNavigate();
  const location = useLocation();
  
  const isEditMode = location.pathname.includes('/edit/');
  const programId = isEditMode ? location.pathname.split('/')[2] : null;
  
  const [visibleExercises, setVisibleExercises] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const muscleGroups = ExerciseService.getAllMuscleGroups();

  // Group consecutive exercises with the same name
  const groupedExercises = chosenExercises.reduce((acc, exercise, index) => {
    const lastGroup = acc[acc.length - 1];
    
    // If this is the first exercise or the name is different from the last group, create a new group
    if (!lastGroup || lastGroup.name !== exercise.name) {
      acc.push({ ...exercise, count: 1 });
    } else {
      // If the name matches the last group, increment the count
      lastGroup.count += 1;
    }
    
    return acc;
  }, [] as Array<{ name: string; img: string; count: number }>);

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
    navigate(isEditMode ? `/edit/${programId}` : '/create');
  };

  const handleSave = () => {
    navigate(isEditMode ? `/edit/${programId}` : '/create');
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
      <div>
        <LoadingSpinner message="Loading exercises..." />
      </div>
    );
  }

  return (
    <ExercisesContainer>
      <ChosenExercisesContainer>
        <ChosenExercise>
          {groupedExercises.map((exercise, index) => (
            <ExerciseContainer key={`${exercise.name}-${index}`}>
              <img 
                src={exercise.img} 
                alt={exercise.name}
              />
              <ExerciseCountBadge>
                {exercise.count}
              </ExerciseCountBadge>
            </ExerciseContainer>
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
            arr={muscle.exercises}
            icon1="exercise"
            icon2="add"
            action1={() => {}}
            action2={handleAddExercise}
            $isVisible={visibleExercises.includes(muscleIndex)}
          />
        </div>
      ))}

      <ControlButtons>
        <ControlButton>
          <icons.cancel 
            onClick={handleClearAll}
          />
        </ControlButton>
        <ControlButton $isVisible={chosenExercises.length > 0}>
          <icons.undo
            onClick={handleRemoveLastExercise}
          />
        </ControlButton>
        <ControlButton>
          <icons.check 
            onClick={handleSave}
          />
        </ControlButton>
      </ControlButtons>
    </ExercisesContainer>
  );
};

export default Exercises;
