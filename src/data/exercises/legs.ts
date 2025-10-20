// Legs exercises data
import squat from '../../assets/exercises_icons/legs/squat.png';
import dumbbellSquat from '../../assets/exercises_icons/legs/dumbbellSquat.png';
import reverseLunge from '../../assets/exercises_icons/legs/reverseLunge.png';
import nordicHamstringCurl from '../../assets/exercises_icons/legs/nordicHamstringCurl.png';
import barbellBackSquat from '../../assets/exercises_icons/legs/barbellBackSquat.png';
import barbellFrontSquat from '../../assets/exercises_icons/legs/barbellFrontSquat.png';
import legPress from '../../assets/exercises_icons/legs/legPress.png';
import lyingLegCurl from '../../assets/exercises_icons/legs/lyingLegCurl.png';
import barbellHipThrust from '../../assets/exercises_icons/legs/barbellHipThrust.png';
import standingCalfRaise from '../../assets/exercises_icons/legs/standingCalfRaise.png';
import seatedCalfRaise from '../../assets/exercises_icons/legs/seatedCalfRaise.png';

import legs from '../../assets/muscle_groups/legs.png';
import { MuscleGroup } from '../../types';

export const legsExercises: MuscleGroup = {
  img: legs,
  name: "Legs",
  exercises: [
    {
      img: squat,
      name: "Squats"
    },
    {
      img: dumbbellSquat,
      name: "Dumbbell squats"
    },
    {
      img: reverseLunge,
      name: "Reverse lunges"
    },
    {
      img: nordicHamstringCurl,
      name: "Nordic hamstring curl"
    },
    {
      img: barbellBackSquat,
      name: "Barbell back squats"
    },
    {
      img: barbellFrontSquat,
      name: "Barbell front squats"
    },
    {
      img: legPress,
      name: "Leg press"
    },
    {
      img: lyingLegCurl,
      name: "Lying leg curl"
    },
    {
      img: barbellHipThrust,
      name: "Barbell hip thrust"
    },
    {
      img: standingCalfRaise,
      name: "Standing calf raises"
    },
    {
      img: seatedCalfRaise,
      name: "Seated calf raises"
    }
  ]
};
