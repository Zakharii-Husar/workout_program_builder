import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import { ExerciseService } from '../../../services/exerciseService';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import ExercisesList from '../ExercisesList';
import { icons } from '../../../data';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { 
  ExercisesContainer, 
  ChosenExercisesContainer, 
  ChosenExercise, 
  PlaceholderText,
  ExerciseContainer,
  ExerciseCountBadge,
  ScrollButton,
  ControlButtons,
  MuscleGroupContainer,
  MuscleIcon,
  ArrowIcon,
  MuscleNameText,
  ControlButton,
  ContentWrapper
} from './index.styled';

const Exercises: React.FC = () => {
  const { state, actions } = useApp();
  const { chosenExercises } = state;
  const navigate = useNavigate();
  const location = useLocation();
  
  const isEditMode = location.pathname.includes('/edit/');
  const programId = isEditMode ? location.pathname.split('/')[2] : null;
  
  const [visibleExercises, setVisibleExercises] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  // Check scroll position and update button states
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  // Auto-scroll to end when exercises are added
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
      checkScrollPosition();
    }
  }, [chosenExercises.length]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleAddExercise = (exercise: any) => {
    console.log('Adding exercise:', exercise);
    console.log('Current chosenExercises:', chosenExercises);
    const updatedExercises = ExerciseService.addExerciseToProgram(chosenExercises, exercise);
    console.log('Updated exercises:', updatedExercises);
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
        {canScrollLeft && (
          <ScrollButton $position="left" onClick={scrollLeft}>
            <AiOutlineCaretLeft size={30} />
          </ScrollButton>
        )}
        <ChosenExercise 
          ref={scrollContainerRef}
          onScroll={checkScrollPosition}
        >
          {groupedExercises.length > 0 ? (
            groupedExercises.map((exercise, index) => (
              <ExerciseContainer key={`${exercise.name}-${index}`}>
                <img 
                  src={exercise.img} 
                  alt={exercise.name}
                />
                <ExerciseCountBadge>
                  {exercise.count}
                </ExerciseCountBadge>
              </ExerciseContainer>
            ))
          ) : (
            <PlaceholderText>
              Select exercises to build your workout program
            </PlaceholderText>
          )}
        </ChosenExercise>
        {canScrollRight && (
          <ScrollButton $position="right" onClick={scrollRight}>
            <AiOutlineCaretRight size={30}/>
          </ScrollButton>
        )}
      </ChosenExercisesContainer>

      <ContentWrapper>
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
      </ContentWrapper>

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
