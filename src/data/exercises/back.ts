// Back exercises data
import pullUp from '../../assets/exercises_icons/back/pullUp.png';
import deadlift from '../../assets/exercises_icons/back/deadlift.png';
import romanianDeadlift from '../../assets/exercises_icons/back/romanianDeadlift.png';
import shrug from '../../assets/exercises_icons/back/shrug.png';
import bentOverDumbbells from '../../assets/exercises_icons/back/bentOverDumbbells.png';
import oneArmDumbbellRow from '../../assets/exercises_icons/back/oneArmDumbbellRow.png';
import latPullDown from '../../assets/exercises_icons/back/latPullDown.png';
import seatedCableRow from '../../assets/exercises_icons/back/seatedCableRow.png';
import chestSupportedRow from '../../assets/exercises_icons/back/chestSupportedRow.png';

import back from '../../assets/muscle_groups/back.png';
import { MuscleGroup } from '../../types';

export const backExercises: MuscleGroup = {
  img: back,
  name: "Back",
  exercises: [
    {
      img: pullUp,
      name: "Pull-ups"
    },
    {
      img: deadlift,
      name: "Deadlift"
    },
    {
      img: romanianDeadlift,
      name: "Romanian deadlift"
    },
    {
      img: shrug,
      name: "Shrugs"
    },
    {
      img: bentOverDumbbells,
      name: "Bent over row"
    },
    {
      img: oneArmDumbbellRow,
      name: "One arm dumbbell row"
    },
    {
      img: latPullDown,
      name: "Lat pull down"
    },
    {
      img: seatedCableRow,
      name: "Seated cable row"
    },
    {
      img: chestSupportedRow,
      name: "Chest supported row"
    }
  ]
};
