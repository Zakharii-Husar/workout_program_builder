import React from 'react';
import Timer from './Timer';
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
        <Timer />
      ) : (
        <ProgramName name={programName} />
      )}
    </>
  );
};

export default WorkoutHeader;

