import React, { useState, useEffect } from 'react';
import { icons } from '../../../data';
import { ExercisesListContainer, ExerciseName, Icon1, Icon2, AddSetButton, IconContainer, ExercisesListWrapper } from './index.styled';

interface ExercisesListProps {
  arr: any[];
  icon1: string;
  icon2: string;
  icon3?: string;
  action1: (element: any) => void;
  action2: (element: any, index?: number) => void;
  action3?: (element: any, index?: number) => void;
  style?: React.CSSProperties;
  $isVisible?: boolean;
}

const ExercisesList: React.FC<ExercisesListProps> = ({
  arr,
  icon1,
  icon2,
  icon3,
  action1,
  action2,
  action3,
  style,
  $isVisible = true
}) => {
  const [exerciseIsDone, setExerciseIsDone] = useState<number[]>([]);

  const getIconComponent = (iconType: string, element?: any, index?: number) => {
    switch (iconType) {
      case 'arrow':
        return <img src={icons.arrow} alt="arrow" />;
      case 'exercise':
        return <img src={element?.img} alt={element?.name} />;
      case 'muscle':
        return <img src={element?.img} alt={element?.name} />;
      case 'add':
        return <AddSetButton onClick={() => {
          console.log('Add Set button clicked for:', element);
          action2(element, index);
        }}>Add Set</AddSetButton>;
      case 'check':
        return <icons.check onClick={() => action2(element, index)} />;
      case 'remove':
        return <icons.remove onClick={() => action2(element, index)} data-icon-type="remove" />;
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
        return <icons.edit onClick={() => action3?.(element, index)} data-icon-type="edit" />;
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

  const handleAction2 = (element: any, index: number) => {
    action2(element, index);
    handleMarkDone(index);
  };

  return (
    <ExercisesListWrapper $isVisible={$isVisible}>
      {arr.map((element, index) => {
        const iconComponent1 = getIconComponent(icon1, element, index);
        const iconComponent2 = getIconComponent(icon2, element, index);
        const iconComponent3 = icon3 ? getIconComponent(icon3, element, index) : null;

        return (
          <ExercisesListContainer key={`${element.name}-${index}`} style={style}>
            <Icon1 $hidden={icon1 === "none"}>
              {iconComponent1}
            </Icon1>
            <ExerciseName 
              $isCentered={icon1 === "none"}
              onClick={() => action1(element)} 
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
