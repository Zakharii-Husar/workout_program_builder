import React from 'react';
import Timer from './Timer';
import RestTimer from './RestTimer';
import ProgramName from './ProgramName';

interface WorkoutHeaderProps {
  isWorkoutActive: boolean;
  programName: string;
  timerDuration: number;
}

const WorkoutHeader: React.FC<WorkoutHeaderProps> = ({ 
  isWorkoutActive, 
  programName, 
  timerDuration 
}) => {
  return (
    <>
      {isWorkoutActive ? (
        <RestTimer />
      ) : (
        <ProgramName name={programName} />
      )}
    </>
  );
};

export default WorkoutHeader;

