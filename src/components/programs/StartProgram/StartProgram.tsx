import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { startWorkout, endWorkout, cancelWorkout, markSetComplete, markSetIncomplete } from '../../../store/slices/workoutSlice';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import ExercisesList from '../../exercises/ExercisesList';
import { StartProgramContainer, WorkoutButton, WorkoutControls } from './StartProgram.styled';
import { icons } from '../../../data';

const StartProgram: React.FC = () => {
  const dispatch = useAppDispatch();
  const { runningProgram, allPrograms } = useAppSelector(state => state.programs);
  const { runningWorkout } = useAppSelector(state => state.workouts);
  const navigate = useNavigate();
  const { programId } = useParams<{ programId: string }>();
  
  // Find the program by ID from URL params
  const currentProgram = programId ? allPrograms.find(p => p.id === programId) : runningProgram;
  
  // If program not found, redirect to main page
  useEffect(() => {
    if (programId && !currentProgram) {
      navigate('/');
    }
  }, [programId, currentProgram, navigate]);

  const handleStartWorkout = () => {
    if (currentProgram) {
      dispatch(startWorkout({
        programId: currentProgram.id,
        name: currentProgram.name,
        restBetweenSets: 60, // Default 60 seconds rest
        exercises: currentProgram.exercises.map(exercise => ({
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
    dispatch(cancelWorkout());
    navigate('/');
  };

  if (!currentProgram) {
    return (
      <div>
        <LoadingSpinner message="Loading program..." />
      </div>
    );
  }

  const exercises = currentProgram.exercises || [];
  const isWorkoutActive = !!runningWorkout;
  const workoutSets = runningWorkout?.exercises || [];

  // Get indices of completed sets for visual display
  const completedIndices = isWorkoutActive 
    ? workoutSets.map((set, index) => set.completed ? index : -1).filter(i => i !== -1)
    : [];

  const handleSetToggle = (exercise: any, exerciseIndex?: number) => {
    if (!runningWorkout || exerciseIndex === undefined) return;
    
    const workoutSet = runningWorkout.exercises[exerciseIndex];
    if (workoutSet) {
      if (workoutSet.completed) {
        dispatch(markSetIncomplete(workoutSet.id));
      } else {
        dispatch(markSetComplete(workoutSet.id));
      }
    }
  };

  return (
    <StartProgramContainer>
      <WorkoutHeader 
        isWorkoutActive={isWorkoutActive}
        programName={currentProgram.name}
        timerDuration={currentProgram.timer}
      />
      
      <ExercisesList
        exercises={exercises}
        primaryIcon="exercise"
        secondaryIcon={isWorkoutActive ? "dot" : "none"}
        onPrimaryAction={() => {}}
        onSecondaryAction={isWorkoutActive ? handleSetToggle : () => {}}
        checkedIndices={completedIndices}
      />

      <WorkoutControls>
        {!isWorkoutActive ? (
          <>
            <WorkoutButton onClick={handleStartWorkout}>
              <icons.check />
              Start Workout
            </WorkoutButton>
            <WorkoutButton onClick={() => navigate('/')}>
              <icons.cancel />
              Exit Program
            </WorkoutButton>
          </>
        ) : (
          <>
            <WorkoutButton onClick={handleEndWorkout}>
              <icons.check />
              End Workout
            </WorkoutButton>
            <WorkoutButton onClick={handleCancelWorkout}>
              <icons.cancel />
              Cancel Workout
            </WorkoutButton>
            <WorkoutButton onClick={() => navigate('/')}>
              <icons.cancel />
              Exit Program
            </WorkoutButton>
          </>
        )}
      </WorkoutControls>
    </StartProgramContainer>
  );
};

export default StartProgram;
