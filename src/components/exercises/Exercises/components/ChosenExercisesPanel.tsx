import React from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { Exercise } from '../../../../types';
import { 
  ChosenExercisesContainer,
  ChosenExercise,
  PlaceholderText,
  ExerciseContainer,
  ExerciseCountBadge,
  ScrollButton
} from '../index.styled';

interface ChosenExercisesPanelProps {
  groupedExercises: Array<{ name: string; img: string; count: number }>;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onScroll: () => void;
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

const ChosenExercisesPanel: React.FC<ChosenExercisesPanelProps> = ({
  groupedExercises,
  scrollContainerRef,
  canScrollLeft,
  canScrollRight,
  onScroll,
  onScrollLeft,
  onScrollRight
}) => {
  return (
    <ChosenExercisesContainer>
      {canScrollLeft && (
        <ScrollButton $position="left" onClick={onScrollLeft}>
          <AiOutlineCaretLeft size={30} />
        </ScrollButton>
      )}
      
      <ChosenExercise 
        ref={scrollContainerRef}
        onScroll={onScroll}
      >
        {groupedExercises.length > 0 ? (
          groupedExercises.map((exercise, index) => (
            <ExerciseContainer key={`${exercise.name}-${index}`}>
              <img 
                src={exercise.img} 
                alt={exercise.name}
              />
              <ExerciseCountBadge>
                {exercise.count}
              </ExerciseCountBadge>
            </ExerciseContainer>
          ))
        ) : (
          <PlaceholderText>
            Select exercises to build your workout program
          </PlaceholderText>
        )}
      </ChosenExercise>
      
      {canScrollRight && (
        <ScrollButton $position="right" onClick={onScrollRight}>
          <AiOutlineCaretRight size={30}/>
        </ScrollButton>
      )}
    </ChosenExercisesContainer>
  );
};

export default ChosenExercisesPanel;
