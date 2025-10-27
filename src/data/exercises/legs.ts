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
      id: "legs-squats",
      img: squat,
      name: "Squats"
    },
    {
      id: "legs-dumbbell-squats",
      img: dumbbellSquat,
      name: "Dumbbell squats"
    },
    {
      id: "legs-reverse-lunges",
      img: reverseLunge,
      name: "Reverse lunges"
    },
    {
      id: "legs-nordic-hamstring-curl",
      img: nordicHamstringCurl,
      name: "Nordic hamstring curl"
    },
    {
      id: "legs-barbell-back-squats",
      img: barbellBackSquat,
      name: "Barbell back squats"
    },
    {
      id: "legs-barbell-front-squats",
      img: barbellFrontSquat,
      name: "Barbell front squats"
    },
    {
      id: "legs-leg-press",
      img: legPress,
      name: "Leg press"
    },
    {
      id: "legs-lying-leg-curl",
      img: lyingLegCurl,
      name: "Lying leg curl"
    },
    {
      id: "legs-barbell-hip-thrust",
      img: barbellHipThrust,
      name: "Barbell hip thrust"
    },
    {
      id: "legs-standing-calf-raises",
      img: standingCalfRaise,
      name: "Standing calf raises"
    },
    {
      id: "legs-seated-calf-raises",
      img: seatedCalfRaise,
      name: "Seated calf raises"
    }
  ]
};
