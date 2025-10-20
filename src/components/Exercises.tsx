import React, { useState, useEffect, useRef } from 'react';
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
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const chosenContainerRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const coarse = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    const touchSupport = typeof window !== 'undefined' && ('ontouchstart' in window || (navigator as any).maxTouchPoints > 0);
    setIsTouch(Boolean(coarse || touchSupport));
  }, []);

  const handleDragStart = (index: number) => {
    setDragIndex(index);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (dropIndex: number) => {
    if (dragIndex === null) return;
    const finalIndex = hoverIndex !== null ? hoverIndex : dropIndex;
    if (finalIndex === dragIndex) {
      setDragIndex(null);
      setHoverIndex(null);
      return;
    }
    const updated = [...chosenExercises];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(finalIndex, 0, moved);
    actions.setChosenExercises(updated);
    setDragIndex(null);
    setHoverIndex(null);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
    setHoverIndex(null);
  };

  const reorderPreview = (list: any[], from: number, to: number) => {
    const copy = [...list];
    const [item] = copy.splice(from, 1);
    copy.splice(to, 0, item);
    return copy;
  };

  const displayedExercises =
    dragIndex !== null && hoverIndex !== null
      ? reorderPreview(chosenExercises, dragIndex, hoverIndex)
      : chosenExercises;

  const getIndexFromClientX = (clientX: number) => {
    const container = chosenContainerRef.current;
    if (!container) return 0;
    const imgs = Array.from(container.querySelectorAll('img')) as HTMLImageElement[];
    if (imgs.length === 0) return 0;
    for (let i = 0; i < imgs.length; i++) {
      const rect = imgs[i].getBoundingClientRect();
      const midpoint = rect.left + rect.width / 2;
      if (clientX < midpoint) return i;
    }
    return imgs.length - 1;
  };

  const handleTouchStart = (index: number, e: React.TouchEvent) => {
    setDragIndex(index);
    setHoverIndex(index);
    // Prevent long-press context menu
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragIndex === null) return;
    const touch = e.touches[0];
    const idx = getIndexFromClientX(touch.clientX);
    setHoverIndex(idx);
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (dragIndex === null) {
      setHoverIndex(null);
      return;
    }
    const finalIndex = hoverIndex ?? dragIndex;
    const updated = [...chosenExercises];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(finalIndex, 0, moved);
    actions.setChosenExercises(updated);
    setDragIndex(null);
    setHoverIndex(null);
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
        <ChosenExercise
          ref={chosenContainerRef}
          onDragOver={handleDragOver}
          onTouchMove={isTouch ? handleTouchMove : undefined}
          onTouchEnd={isTouch ? handleTouchEnd : undefined}
        >
          {displayedExercises.map((exercise, index) => (
            <img 
              key={`${exercise.name}-${index}`}
              src={exercise.img} 
              alt={exercise.name}
              draggable={!isTouch}
              onDragStart={!isTouch ? () => handleDragStart(index) : undefined}
              onDragOver={!isTouch ? (e) => { handleDragOver(e); setHoverIndex(index); } : undefined}
              onDrop={!isTouch ? () => handleDrop(index) : undefined}
              onDragEnd={!isTouch ? handleDragEnd : undefined}
              onTouchStart={isTouch ? (e) => handleTouchStart(index, e) : undefined}
              style={{
                opacity: dragIndex === index ? 0.6 : 1,
                borderColor: hoverIndex === index ? '#7c3aed' : undefined,
                transform: hoverIndex === index ? 'scale(1.06)' : undefined,
                boxShadow: hoverIndex === index ? '0 0 0 2px rgba(124,58,237,0.35)' : undefined,
                transition: 'transform 120ms ease, box-shadow 120ms ease, opacity 120ms ease'
              }}
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
