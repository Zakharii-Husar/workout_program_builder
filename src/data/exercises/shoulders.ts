// Shoulders exercises data
import militaryPress from '../../assets/exercises_icons/shoulders/militaryPress.png';
import militaryDumbbellPress from '../../assets/exercises_icons/shoulders/militaryDumbbellPress.png';
import seatedBarbellPress from '../../assets/exercises_icons/shoulders/seatedBarbellPress.png';
import seatedDumbbellPress from '../../assets/exercises_icons/shoulders/seatedDumbbellPress.png';
import bottomsUpKettlebellPress from '../../assets/exercises_icons/shoulders/bottomsUpKettlebellPress.png';
import dumbbellLateralRaise from '../../assets/exercises_icons/shoulders/dumbbellLateralRaise.png';
import frontDumbbellRaise from '../../assets/exercises_icons/shoulders/frontDumbbellRaise.png';
import leverageShoulderPress from '../../assets/exercises_icons/shoulders/leverageShoulderPress.png';

import shoulders from '../../assets/muscle_groups/shoulders.png';
import { MuscleGroup } from '../../types';

export const shouldersExercises: MuscleGroup = {
  img: shoulders,
  name: "Shoulders",
  exercises: [
    {
      id: "shoulders-military-press",
      img: militaryPress,
      name: "Military press"
    },
    {
      id: "shoulders-military-dumbbell-press",
      img: militaryDumbbellPress,
      name: "Military dumbbell press"
    },
    {
      id: "shoulders-seated-barbell-press",
      img: seatedBarbellPress,
      name: "Seated barbell press"
    },
    {
      id: "shoulders-seated-dumbbell-press",
      img: seatedDumbbellPress,
      name: "Seated dumbbell press"
    },
    {
      id: "shoulders-bottoms-up-kettlebell-press",
      img: bottomsUpKettlebellPress,
      name: "Bottoms-up kettlebell press"
    },
    {
      id: "shoulders-dumbbell-lateral-raise",
      img: dumbbellLateralRaise,
      name: "Dumbbell lateral raise"
    },
    {
      id: "shoulders-front-dumbbell-raise",
      img: frontDumbbellRaise,
      name: "Front dumbbell raise"
    },
    {
      id: "shoulders-leverage-shoulder-press",
      img: leverageShoulderPress,
      name: "Leverage shoulder press"
    }
  ]
};
