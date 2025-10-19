import React, { useState, useEffect } from 'react';
import { icons } from '../data/data';
import { ExercisesListContainer, ExerciseName, Icon1, Icon2 } from './ExercisesList.styled';

interface ExercisesListProps {
  arr: any[];
  icon1: string;
  icon2: string;
  action1: (element: any) => void;
  action2: (element: any, index?: number) => void;
  style?: React.CSSProperties;
}

const ExercisesList: React.FC<ExercisesListProps> = ({
  arr,
  icon1,
  icon2,
  action1,
  action2,
  style
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
        return <icons.add onClick={() => action2(element, index)} />;
      case 'check':
        return <icons.check onClick={() => action2(element, index)} />;
      case 'remove':
        return <icons.remove onClick={() => action2(element, index)} />;
      case 'dot':
        return exerciseIsDone.includes(index || 0) ? 
          <icons.greendot style={{ color: 'green' }} onClick={() => handleMarkDone(index || 0)} /> : 
          <icons.reddot style={{ color: 'red' }} onClick={() => handleMarkDone(index || 0)} />;
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
    <div>
      {arr.map((element, index) => {
        const iconComponent1 = getIconComponent(icon1, element, index);
        const iconComponent2 = getIconComponent(icon2, element, index);

        return (
          <ExercisesListContainer key={`${element.name}-${index}`} style={style}>
            <Icon1 
              style={icon1 === "none" ? { display: "none" } : { display: "flex" }}
            >
              {iconComponent1}
            </Icon1>
            <ExerciseName 
              style={icon1 === "none" ? 
                { marginLeft: "5%", fontSize: "2rem" } : 
                { marginLeft: "auto" }
              }
              onClick={() => action1(element)} 
            >
              {index + 1}. {element.name}
            </ExerciseName>
            <Icon2>
              {iconComponent2}
            </Icon2>
          </ExercisesListContainer>
        );
      })}
    </div>
  );
};

export default ExercisesList;
