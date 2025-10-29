import React, { useCallback, useState } from 'react';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import { useProgramEditor } from './hooks/useProgramEditor';
import { ExerciseStep, TimerStep, NameStep, ActionStep } from './components';
import { ProgramEditorContainer } from './index.styled';
import WarningModal from '../../common/WarningModal/WarningModal';

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
    isUpdating,
    hasUnsavedChanges,
    hasCreateUnsavedChanges
  } = useProgramEditor();

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleCancelClick = useCallback(() => {
    const shouldWarn = (isEditMode && hasUnsavedChanges) || (!isEditMode && hasCreateUnsavedChanges);
    if (shouldWarn) {
      setIsCancelModalOpen(true);
      return;
    }
    handleCancel();
  }, [isEditMode, hasUnsavedChanges, hasCreateUnsavedChanges, handleCancel]);

  const closeCancelModal = useCallback(() => setIsCancelModalOpen(false), []);
  const confirmDiscard = useCallback(() => {
    handleCancel();
  }, [handleCancel]);

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
          onCancel={handleCancelClick}
        />
      </ProgramEditorContainer>
      <WarningModal
        isOpen={isCancelModalOpen}
        onClose={closeCancelModal}
        onConfirm={confirmDiscard}
        message={"Discard your changes? This action cannot be undone."}
        confirmLabel="Discard"
        cancelLabel="Keep editing"
        confirmButtonColor="#dc3545"
      />
    </div>
  );
};

export default ProgramEditor;
