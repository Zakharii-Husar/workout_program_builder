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

  const getIconSource = (iconType: string, element?: any, index?: number) => {
    switch (iconType) {
      case 'arrow':
        return icons.arrow;
      case 'exercise':
        return element?.img;
      case 'muscle':
        return element?.img;
      case 'add':
        return icons.add;
      case 'check':
        return icons.check;
      case 'remove':
        return icons.remove;
      case 'dot':
        return exerciseIsDone.includes(index || 0) ? icons.greendot : icons.reddot;
      default:
        return '';
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
        const source1 = getIconSource(icon1, element, index);
        const source2 = getIconSource(icon2, element, index);

        return (
          <ExercisesListContainer key={`${element.name}-${index}`} style={style}>
            <Icon1 
              src={source1} 
              style={icon1 === "none" ? { display: "none" } : { display: "flex" }}
              alt={element.name}
            />
            <ExerciseName 
              style={icon1 === "none" ? 
                { marginLeft: "5%", fontSize: "2rem" } : 
                { marginLeft: "auto" }
              }
              onClick={() => action1(element)} 
            >
              {index + 1}. {element.name}
            </ExerciseName>
            <Icon2 
              src={source2} 
              onClick={() => handleAction2(element, index)} 
              alt={icon2}
            />
          </ExercisesListContainer>
        );
      })}
    </div>
  );
};

export default ExercisesList;
