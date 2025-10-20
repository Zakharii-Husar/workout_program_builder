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
      img: militaryPress,
      name: "Military press"
    },
    {
      img: militaryDumbbellPress,
      name: "Military dumbbell press"
    },
    {
      img: seatedBarbellPress,
      name: "Seated barbell press"
    },
    {
      img: seatedDumbbellPress,
      name: "Seated dumbbell press"
    },
    {
      img: bottomsUpKettlebellPress,
      name: "Bottoms-up kettlebell press"
    },
    {
      img: dumbbellLateralRaise,
      name: "Dumbbell lateral raise"
    },
    {
      img: frontDumbbellRaise,
      name: "Front dumbbell raise"
    },
    {
      img: leverageShoulderPress,
      name: "Leverage shoulder press"
    }
  ]
};
