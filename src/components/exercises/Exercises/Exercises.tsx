import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import { useExerciseSelection, useScrollManagement, useMuscleGroupToggle } from './hooks';
import { ChosenExercisesPanel, MuscleGroupsList, ControlButtons } from './components';
import { ExercisesContainer } from './index.styled';

const Exercises: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isEditMode = location.pathname.includes('/edit/');
  const programId = isEditMode ? location.pathname.split('/')[2] : null;
  const [isLoading, setIsLoading] = useState(false);

  // Custom hooks
  const {
    chosenExercises,
    groupedExercises,
    handleAddExercise,
    handleRemoveExercise,
    handleRemoveLastExercise,
    handleClearAll: clearAllExercises,
    hasExercises
  } = useExerciseSelection();

  const {
    scrollContainerRef,
    canScrollLeft,
    canScrollRight,
    checkScrollPosition,
    scrollLeft,
    scrollRight
  } = useScrollManagement(chosenExercises.length);

  const {
    visibleExercises,
    toggleExercisesVisibility
  } = useMuscleGroupToggle();

  // Navigation handlers
  const handleClearAll = () => {
    clearAllExercises();
    navigate(isEditMode ? `/edit/${programId}` : '/create');
  };

  const handleCancel = () => {
    navigate(isEditMode ? `/edit/${programId}` : '/create');
  };

  const handleSave = () => {
    navigate(isEditMode ? `/edit/${programId}` : '/create');
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
      <ChosenExercisesPanel
        groupedExercises={groupedExercises}
        scrollContainerRef={scrollContainerRef}
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
        onScroll={checkScrollPosition}
        onScrollLeft={scrollLeft}
        onScrollRight={scrollRight}
      />

      <MuscleGroupsList
        visibleExercises={visibleExercises}
        onToggleVisibility={toggleExercisesVisibility}
        onAddExercise={handleAddExercise}
      />

      <ControlButtons
        hasExercises={hasExercises}
        onClearAll={handleClearAll}
        onCancel={handleCancel}
        onRemoveLast={handleRemoveLastExercise}
        onSave={handleSave}
      />
    </ExercisesContainer>
  );
};

export default Exercises;
