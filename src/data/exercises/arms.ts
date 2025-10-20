// Arms exercises data
import chinUp from '../../assets/exercises_icons/biceps/chinUp.png';
import barbellCurl from '../../assets/exercises_icons/biceps/barbellCurl.png';
import hammerCurl from '../../assets/exercises_icons/biceps/hammerCurl.png';
import seatedDumbbellCurl from '../../assets/exercises_icons/biceps/seatedDumbbellCurl.png';
import concentrationCurl from '../../assets/exercises_icons/biceps/concentrationCurl.png';
import barbellPreacherCurl from '../../assets/exercises_icons/biceps/barbellPreacherCurl.png';
import inclineDumbbellCurl from '../../assets/exercises_icons/biceps/InclineDumbbellCurl.png';
// Triceps
import narrowPushUps from '../../assets/exercises_icons/triceps/narrowPushUps.png';
import tricepDips from '../../assets/exercises_icons/triceps/tricepDips.png';
import benchDip from '../../assets/exercises_icons/triceps/benchDip.png';
import closeGripBenchPress from '../../assets/exercises_icons/triceps/closeGripBenchPress.png';
import standingTricepsExtension from '../../assets/exercises_icons/triceps/standingTricepsExtension.png';
import dumbbellFrenchPress from '../../assets/exercises_icons/triceps/dumbbellFrenchPress.png';
import lyingTricepsExtension from '../../assets/exercises_icons/triceps/lyingTricepsExtension.png';
import cableRopeTricepPushdown from '../../assets/exercises_icons/triceps/cableRopeTricepPushdown.png';

import arms from '../../assets/muscle_groups/arms.png';
import { MuscleGroup } from '../../types';

export const armsExercises: MuscleGroup = {
  img: arms,
  name: "Arms",
  exercises: [
    // Biceps
    {
      img: chinUp,
      name: "Chin-ups"
    },
    {
      img: barbellCurl,
      name: "Barbell bicep curls"
    },
    {
      img: hammerCurl,
      name: "Hammer curls"
    },
    {
      img: seatedDumbbellCurl,
      name: "Seated dumbbell curls"
    },
    {
      img: concentrationCurl,
      name: "Concentration curl"
    },
    {
      img: barbellPreacherCurl,
      name: "Barbell preacher curls"
    },
    {
      img: inclineDumbbellCurl,
      name: "Incline dumbbell curl"
    },
    // Triceps
    {
      img: narrowPushUps,
      name: "Narrow push-ups"
    },
    {
      img: tricepDips,
      name: "Tricep dips"
    },
    {
      img: benchDip,
      name: "Bench dips"
    },
    {
      img: closeGripBenchPress,
      name: "Close grip bench press"
    },
    {
      img: standingTricepsExtension,
      name: "Standing triceps extension"
    },
    {
      img: dumbbellFrenchPress,
      name: "Dumbbell french press"
    },
    {
      img: lyingTricepsExtension,
      name: "Lying triceps extension"
    },
    {
      img: cableRopeTricepPushdown,
      name: "Rope triceps push-down"
    }
  ]
};
