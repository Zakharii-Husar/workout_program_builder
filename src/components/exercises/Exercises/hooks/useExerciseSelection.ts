import { useApp } from '../../../../context/AppContext';
import { ExerciseService } from '../../../../services/exerciseService';
import { Exercise } from '../../../../types';

export const useExerciseSelection = () => {
  const { state, actions } = useApp();
  const { chosenExercises } = state;

  const handleAddExercise = (exercise: Exercise) => {
    const updatedExercises = ExerciseService.addExerciseToProgram(chosenExercises, exercise);
    actions.setChosenExercises(updatedExercises);
  };

  const handleRemoveExercise = (exercise: Exercise, index: number) => {
    const updatedExercises = ExerciseService.removeExerciseFromProgram(chosenExercises, exercise, index);
    actions.setChosenExercises(updatedExercises);
  };

  const handleRemoveLastExercise = () => {
    if (chosenExercises.length > 0) {
      const updatedExercises = chosenExercises.slice(0, -1);
      actions.setChosenExercises(updatedExercises);
    }
  };

  const handleClearAll = () => {
    actions.setChosenExercises([]);
  };

  // Group consecutive exercises with the same name
  const groupedExercises = chosenExercises.reduce((acc, exercise, index) => {
    const lastGroup = acc[acc.length - 1];
    
    // If this is the first exercise or the name is different from the last group, create a new group
    if (!lastGroup || lastGroup.name !== exercise.name) {
      acc.push({ ...exercise, count: 1 });
    } else {
      // If the name matches the last group, increment the count
      lastGroup.count += 1;
    }
    
    return acc;
  }, [] as Array<{ name: string; img: string; count: number }>);

  return {
    chosenExercises,
    groupedExercises,
    handleAddExercise,
    handleRemoveExercise,
    handleRemoveLastExercise,
    handleClearAll,
    hasExercises: chosenExercises.length > 0
  };
};
