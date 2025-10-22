import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { addDraftExercise, removeDraftExercise, updateDraftExercises } from '../../../../store/slices/programSlice';
import { ExerciseService } from '../../../../services/exerciseService';
import { Exercise } from '../../../../types';

export const useExerciseSelection = () => {
  const dispatch = useAppDispatch();
  const { programDraft } = useAppSelector(state => state.programs);
  const chosenExercises = programDraft?.exercises || [];

  const handleAddExercise = (exercise: Exercise) => {
    dispatch(addDraftExercise(exercise));
  };

  const handleRemoveExercise = (exercise: Exercise, index: number) => {
    dispatch(removeDraftExercise(index));
  };

  const handleRemoveLastExercise = () => {
    if (chosenExercises.length > 0) {
      dispatch(removeDraftExercise(chosenExercises.length - 1));
    }
  };

  const handleClearAll = () => {
    dispatch(updateDraftExercises([]));
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
