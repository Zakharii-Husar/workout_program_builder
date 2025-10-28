import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { startWorkout, endWorkout, cancelWorkout, markSetComplete, markSetIncomplete, updateSet, WorkoutSet } from '../../../store/slices/workoutSlice';
import { WorkoutProgram, Exercise } from '../../../types';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import WarningModal from '../../common/WarningModal';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import WorkoutFooter from './WorkoutFooter';
import ExercisesList from '../../exercises/ExercisesList';
import SetCompletionModal from './SetCompletionModal';
import { ActiveWorkoutContainer, WorkoutContent } from './ActiveWorkout.styled';
import { ExerciseResolver } from '../../../services/exerciseResolver';

const ActiveWorkout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { runningProgram, allPrograms } = useAppSelector(state => state.programs);
  const { runningWorkout } = useAppSelector(state => state.workouts);
  const navigate = useNavigate();
  const { programId } = useParams<{ programId: string }>();
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSetId, setSelectedSetId] = useState<string | null>(null);
  const [selectedExerciseName, setSelectedExerciseName] = useState<string>('');
  
  // Warning modal state for canceling workout
  const [isCancelWarningOpen, setIsCancelWarningOpen] = useState(false);
  
  // Find the program by ID from URL params
  const currentProgram = programId ? allPrograms.find((p: WorkoutProgram) => p.id === programId) : runningProgram;
  
  // If program not found, redirect to main page
  useEffect(() => {
    if (programId && !currentProgram) {
      navigate('/');
    }
  }, [programId, currentProgram, navigate]);

  const handleStartWorkout = () => {
    if (currentProgram) {
      const exercises = ExerciseResolver.getExercisesByIds(currentProgram.exerciseIds);
      dispatch(startWorkout({
        programId: currentProgram.id,
        name: currentProgram.name,
        restBetweenSets: currentProgram.restBetweenSets, // Use the program's configured rest time
        exercises: exercises.map(exercise => ({
          name: exercise.name,
          reps: null,
          weight: null
        }))
      }));
    }
  };

  const handleEndWorkout = () => {
    dispatch(endWorkout());
    navigate('/');
  };

  const handleCancelWorkout = () => {
    setIsCancelWarningOpen(true);
  };

  const handleConfirmCancel = () => {
    dispatch(cancelWorkout());
    setIsCancelWarningOpen(false);
  };

  if (!currentProgram) {
    return (
      <div>
        <LoadingSpinner message="Loading program..." />
      </div>
    );
  }

  const exercises = ExerciseResolver.getExercisesByIds(currentProgram.exerciseIds || []);
  const isWorkoutActive = !!runningWorkout;
  const workoutSets = runningWorkout?.exercises || [];

  // Get indices of completed sets for visual display
  const completedIndices = isWorkoutActive 
    ? workoutSets.map((set: WorkoutSet, index: number) => set.completed ? index : -1).filter((i: number) => i !== -1)
    : [];

  const handleSetToggle = (exercise: Exercise, exerciseIndex?: number) => {
    if (!runningWorkout || exerciseIndex === undefined) return;
    
    const workoutSet = runningWorkout.exercises[exerciseIndex];
    if (workoutSet) {
      if (workoutSet.completed) {
        dispatch(markSetIncomplete(workoutSet.id));
      } else {
        // Show modal for set completion
        setSelectedSetId(workoutSet.id);
        setSelectedExerciseName(exercise.name);
        setIsModalOpen(true);
      }
    }
  };

  const handleModalSave = (data: {
    reps: number | null;
    weight: number | null;
    actualRestTime: number;
  }) => {
    if (selectedSetId) {
      // Mark set as complete and update with the data
      dispatch(markSetComplete(selectedSetId));
      dispatch(updateSet({
        setId: selectedSetId,
        updates: {
          reps: data.reps,
          weight: data.weight,
          actualRestTime: data.actualRestTime
        }
      }));
    }
    setIsModalOpen(false);
    setSelectedSetId(null);
    setSelectedExerciseName('');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedSetId(null);
    setSelectedExerciseName('');
  };

  return (
    <ActiveWorkoutContainer>
      <WorkoutHeader 
        isWorkoutActive={isWorkoutActive}
        programName={currentProgram.name}
        timerDuration={currentProgram.restBetweenSets}
      />
      
      <WorkoutContent>
        <ExercisesList
          exercises={exercises}
          primaryIcon="exercise"
          secondaryIcon={isWorkoutActive ? "dot" : "none"}
          onPrimaryAction={() => {}}
          onSecondaryAction={isWorkoutActive ? handleSetToggle : () => {}}
          checkedIndices={completedIndices}
        />
      </WorkoutContent>

      <WorkoutFooter
        isWorkoutActive={isWorkoutActive}
        onStartWorkout={handleStartWorkout}
        onEndWorkout={handleEndWorkout}
        onCancelWorkout={handleCancelWorkout}
        onExit={() => navigate('/')}
      />

      <SetCompletionModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleModalSave}
        exerciseName={selectedExerciseName}
        targetRestTime={runningWorkout?.restBetweenSets || 60}
      />

      <WarningModal
        isOpen={isCancelWarningOpen}
        onClose={() => setIsCancelWarningOpen(false)}
        onConfirm={handleConfirmCancel}
        message="All progress will be lost! Are you sure you want to cancel?"
        confirmLabel="Yes, Cancel"
        cancelLabel="No, Keep Going"
        confirmButtonColor="#dc3545"
      />
    </ActiveWorkoutContainer>
  );
};

export default ActiveWorkout;

