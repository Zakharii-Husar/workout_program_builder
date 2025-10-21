import { useState } from 'react';
import { UI } from '../../../../utils/constants';

export const useMuscleGroupToggle = () => {
  const [visibleExercises, setVisibleExercises] = useState<number[]>([]);

  const toggleExercisesVisibility = (muscleIndex: number) => {
    setVisibleExercises(prev => 
      prev.includes(muscleIndex)
        ? prev.filter(index => index !== muscleIndex)
        : [...prev, muscleIndex]
    );

    // Smooth scroll to the muscle group
    setTimeout(() => {
      window.scrollBy({
        top: muscleIndex * UI.MUSCLE_GROUP_SCROLL_OFFSET,
        behavior: 'smooth'
      });
    }, 10);
  };

  return {
    visibleExercises,
    toggleExercisesVisibility
  };
};
