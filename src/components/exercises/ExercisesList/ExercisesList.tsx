import React, { useState, useEffect } from 'react';
import { icons } from '../../../data';
import { Exercise, ExerciseListProps } from '../../../types';
import { ExercisesListContainer, ExerciseName, Icon1, Icon2, AddSetButton, IconContainer, ExercisesListWrapper } from './index.styled';

const ExercisesList: React.FC<ExerciseListProps> = ({
  exercises,
  primaryIcon,
  secondaryIcon,
  tertiaryIcon,
  onPrimaryAction,
  onSecondaryAction,
  onTertiaryAction,
  style,
  isVisible = true
}) => {
  const [exerciseIsDone, setExerciseIsDone] = useState<number[]>([]);

  const getIconComponent = (iconType: string, element?: Exercise, index?: number) => {
    switch (iconType) {
      case 'arrow':
        return <img src={icons.arrow} alt="arrow" />;
      case 'exercise':
        return <img src={element?.img} alt={element?.name} />;
      case 'muscle':
        return <img src={element?.img} alt={element?.name} />;
      case 'add':
        return <AddSetButton onClick={() => {
          onSecondaryAction(element!, index);
        }}>Add Set</AddSetButton>;
      case 'check':
        return <icons.check onClick={() => onSecondaryAction(element!, index)} />;
      case 'remove':
        return <icons.remove onClick={() => onSecondaryAction(element!, index)} data-icon-type="remove" />;
      case 'dot':
        const isDone = exerciseIsDone.includes(index || 0);
        return isDone ? 
          <icons.checkedSquare 
            onClick={() => handleMarkDone(index || 0)} 
            data-icon-type="square"
            data-checked="true"
          /> : 
          <icons.emptySquare 
            onClick={() => handleMarkDone(index || 0)} 
            data-icon-type="square"
            data-checked="false"
          />;
      case 'edit':
        return <icons.edit onClick={() => onTertiaryAction?.(element!, index)} data-icon-type="edit" />;
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

  const handleAction2 = (element: Exercise, index: number) => {
    onSecondaryAction(element, index);
    handleMarkDone(index);
  };

  return (
    <ExercisesListWrapper $isVisible={isVisible}>
      {exercises.map((element: Exercise, index: number) => {
        const iconComponent1 = getIconComponent(primaryIcon, element, index);
        const iconComponent2 = getIconComponent(secondaryIcon, element, index);
        const iconComponent3 = tertiaryIcon ? getIconComponent(tertiaryIcon, element, index) : null;

        return (
          <ExercisesListContainer key={`${element.name}-${index}`} style={style}>
            <Icon1 $hidden={primaryIcon === "none"}>
              {iconComponent1}
            </Icon1>
            <ExerciseName 
              $isCentered={primaryIcon === "none"}
              onClick={() => onPrimaryAction(element)} 
            >
              {index + 1}. {element.name}
            </ExerciseName>
            <IconContainer>
              {iconComponent3 && (
                <Icon2>
                  {iconComponent3}
                </Icon2>
              )}
              <Icon2>
                {iconComponent2}
              </Icon2>
            </IconContainer>
          </ExercisesListContainer>
        );
      })}
    </ExercisesListWrapper>
  );
};

export default ExercisesList;
