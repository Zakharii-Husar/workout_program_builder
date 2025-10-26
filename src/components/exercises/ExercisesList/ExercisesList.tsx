import React, { useState, useEffect } from 'react';
import { icons } from '../../../data';
import { Exercise, ExerciseListProps } from '../../../types';
import { ExercisesListContainer, ExerciseName, ExerciseIcon, ActionIcon, AddSetButton, IconContainer, ExercisesListWrapper } from './index.styled';

const ExercisesList: React.FC<ExerciseListProps> = ({
  exercises,
  primaryIcon,
  secondaryIcon,
  tertiaryIcon,
  onPrimaryAction,
  onSecondaryAction,
  onTertiaryAction,
  style,
  isVisible = true,
  checkedIndices
}) => {
  const [exerciseIsDone, setExerciseIsDone] = useState<number[]>([]);
  
  // Sync internal state with external checkedIndices prop
  useEffect(() => {
    if (checkedIndices !== undefined) {
      setExerciseIsDone(checkedIndices);
    }
  }, [checkedIndices]);

  const getIconComponent = (iconType: string, exercise?: Exercise, exerciseIndex?: number) => {
    switch (iconType) {
      case 'arrow':
        return <img src={icons.arrow} alt="arrow" />;
      case 'exercise':
        return <img src={exercise?.img} alt={exercise?.name} />;
      case 'muscle':
        return <img src={exercise?.img} alt={exercise?.name} />;
      case 'add':
        return <AddSetButton onClick={() => {
          onSecondaryAction(exercise!, exerciseIndex);
        }}>Add Set</AddSetButton>;
      case 'check':
        return <icons.check onClick={() => onSecondaryAction(exercise!, exerciseIndex)} />;
      case 'remove':
        return <icons.remove onClick={() => onSecondaryAction(exercise!, exerciseIndex)} data-icon-type="remove" />;
      case 'dot':
        const isExerciseDone = exerciseIsDone.includes(exerciseIndex || 0);
        const handleDotClick = () => {
          handleMarkDone(exerciseIndex || 0);
          onSecondaryAction(exercise!, exerciseIndex);
        };
        return isExerciseDone ?
          <icons.checkedSquare
            onClick={handleDotClick}
            data-icon-type="square"
            data-checked="true"
          /> :
          <icons.emptySquare
            onClick={handleDotClick}
            data-icon-type="square"
            data-checked="false"
          />;
      case 'edit':
        return <icons.edit onClick={() => onTertiaryAction?.(exercise!, exerciseIndex)} data-icon-type="edit" />;
      default:
        return null;
    }
  };

  const handleMarkDone = (index: number) => {
    setExerciseIsDone(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleSecondaryActionWithMarkDone = (exercise: Exercise, exerciseIndex: number) => {
    onSecondaryAction(exercise, exerciseIndex);
    handleMarkDone(exerciseIndex);
  };

  return (
    <ExercisesListWrapper $isVisible={isVisible}>
      {exercises.map((exercise: Exercise, exerciseIndex: number) => {
        const primaryIconComponent = getIconComponent(primaryIcon, exercise, exerciseIndex);
        const secondaryIconComponent = getIconComponent(secondaryIcon, exercise, exerciseIndex);
        const tertiaryIconComponent = tertiaryIcon ? getIconComponent(tertiaryIcon, exercise, exerciseIndex) : null;

        return (
          <ExercisesListContainer key={`${exercise.name}-${exerciseIndex}`} style={style}>
            <ExerciseIcon $hidden={primaryIcon === "none"}>
              {primaryIconComponent}
            </ExerciseIcon>
            <ExerciseName 
              $isCentered={primaryIcon === "none"}
              onClick={() => onPrimaryAction(exercise, exerciseIndex)} 
            >
              {exerciseIndex + 1}. {exercise.name}
            </ExerciseName>
            <IconContainer>
              {tertiaryIconComponent && (
                <ActionIcon>
                  {tertiaryIconComponent}
                </ActionIcon>
              )}
              <ActionIcon>
                {secondaryIconComponent}
              </ActionIcon>
            </IconContainer>
          </ExercisesListContainer>
        );
      })}
    </ExercisesListWrapper>
  );
};

export default ExercisesList;
