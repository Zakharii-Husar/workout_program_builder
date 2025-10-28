import React from 'react';
import RestStopwatch from './RestStopwatch';
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
        <RestStopwatch />
      ) : (
        <ProgramName name={programName} />
      )}
    </>
  );
};

export default WorkoutHeader;

