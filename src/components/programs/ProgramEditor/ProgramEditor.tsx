import React from 'react';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import { useProgramEditor } from './hooks/useProgramEditor';
import { ExerciseStep, TimerStep, NameStep, ActionStep } from './components';
import { ProgramEditorContainer } from './index.styled';

const ProgramEditor: React.FC = () => {
  const {
    // State
    name,
    timer,
    isLoading,
    chosenExercises,
    navigationState,
    
    // Actions
    setName,
    handleTimerChange,
    handleSaveProgram,
    handleCancel,
    handleNavigateToExercises,
    
    // Computed values
    hasExercises,
    isEditMode,
    isUpdating
  } = useProgramEditor();

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner message="Saving program..." />
      </div>
    );
  }

  return (
    <div>
      <ProgramEditorContainer>
        <ExerciseStep
          chosenExercises={chosenExercises}
          hasExercises={hasExercises}
          isEditMode={isEditMode}
          programId={navigationState.programId}
          onNavigateToExercises={handleNavigateToExercises}
        />

        <TimerStep
          timer={timer}
          onTimerChange={handleTimerChange}
        />

        <NameStep
          name={name}
          onNameChange={setName}
        />

        <ActionStep
          isEditMode={isEditMode}
          onSave={handleSaveProgram}
          onCancel={handleCancel}
        />
      </ProgramEditorContainer>
    </div>
  );
};

export default ProgramEditor;
