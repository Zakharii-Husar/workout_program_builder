// Chest exercises data
import pushUps from '../../assets/exercises_icons/chest/pushUps.png';
import inclinePushUps from '../../assets/exercises_icons/chest/inclinePushUps.png';
import declinePushUps from '../../assets/exercises_icons/chest/declinePushUps.png';
import chestDips from '../../assets/exercises_icons/chest/chestDips.png';
import flatBenchPress from '../../assets/exercises_icons/chest/flatBenchPress.png';
import dumbbellPress from '../../assets/exercises_icons/chest/dumbbellPress.png';
import inclineBenchPress from '../../assets/exercises_icons/chest/inclineBenchPress.png';
import inclineDumbbellPress from '../../assets/exercises_icons/chest/inclineDumbbellPress.png';
import declineBenchPress from '../../assets/exercises_icons/chest/declineBenchPress.png';
import dumbbellFly from '../../assets/exercises_icons/chest/dumbbellFly.png';
import pectoralFly from '../../assets/exercises_icons/chest/pectoralFly.png';
import cableCrossover from '../../assets/exercises_icons/chest/cableCrossover.png';

import chest from '../../assets/muscle_groups/chest.png';
import { MuscleGroup } from '../../types';

export const chestExercises: MuscleGroup = {
  img: chest,
  name: "Chest",
  exercises: [
    {
      img: pushUps,
      name: "Push-ups"
    },
    {
      img: inclinePushUps,
      name: "Incline push-ups"
    },
    {
      img: declinePushUps,
      name: "Decline push-ups"
    },
    {
      img: chestDips,
      name: "Chest dips"
    },
    {
      img: flatBenchPress,
      name: "Bench press"
    },
    {
      img: dumbbellPress,
      name: "Dumbbell press"
    },
    {
      img: inclineBenchPress,
      name: "Incline bench press"
    },
    {
      img: inclineDumbbellPress,
      name: "Incline dumbbell press"
    },
    {
      img: declineBenchPress,
      name: "Decline bench press"
    },
    {
      img: dumbbellFly,
      name: "Dumbbell fly"
    },
    {
      img: pectoralFly,
      name: "Pectoral fly"
    },
    {
      img: cableCrossover,
      name: "Cable crossover"
    }
  ]
};
