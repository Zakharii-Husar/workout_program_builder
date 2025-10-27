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
      id: "chest-push-ups",
      img: pushUps,
      name: "Push-ups"
    },
    {
      id: "chest-incline-push-ups",
      img: inclinePushUps,
      name: "Incline push-ups"
    },
    {
      id: "chest-decline-push-ups",
      img: declinePushUps,
      name: "Decline push-ups"
    },
    {
      id: "chest-chest-dips",
      img: chestDips,
      name: "Chest dips"
    },
    {
      id: "chest-bench-press",
      img: flatBenchPress,
      name: "Bench press"
    },
    {
      id: "chest-dumbbell-press",
      img: dumbbellPress,
      name: "Dumbbell press"
    },
    {
      id: "chest-incline-bench-press",
      img: inclineBenchPress,
      name: "Incline bench press"
    },
    {
      id: "chest-incline-dumbbell-press",
      img: inclineDumbbellPress,
      name: "Incline dumbbell press"
    },
    {
      id: "chest-decline-bench-press",
      img: declineBenchPress,
      name: "Decline bench press"
    },
    {
      id: "chest-dumbbell-fly",
      img: dumbbellFly,
      name: "Dumbbell fly"
    },
    {
      id: "chest-pectoral-fly",
      img: pectoralFly,
      name: "Pectoral fly"
    },
    {
      id: "chest-cable-crossover",
      img: cableCrossover,
      name: "Cable crossover"
    }
  ]
};
