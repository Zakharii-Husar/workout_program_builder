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
      id: "arms-chin-ups",
      img: chinUp,
      name: "Chin-ups"
    },
    {
      id: "arms-barbell-bicep-curls",
      img: barbellCurl,
      name: "Barbell bicep curls"
    },
    {
      id: "arms-hammer-curls",
      img: hammerCurl,
      name: "Hammer curls"
    },
    {
      id: "arms-seated-dumbbell-curls",
      img: seatedDumbbellCurl,
      name: "Seated dumbbell curls"
    },
    {
      id: "arms-concentration-curl",
      img: concentrationCurl,
      name: "Concentration curl"
    },
    {
      id: "arms-barbell-preacher-curls",
      img: barbellPreacherCurl,
      name: "Barbell preacher curls"
    },
    {
      id: "arms-incline-dumbbell-curl",
      img: inclineDumbbellCurl,
      name: "Incline dumbbell curl"
    },
    // Triceps
    {
      id: "arms-narrow-push-ups",
      img: narrowPushUps,
      name: "Narrow push-ups"
    },
    {
      id: "arms-tricep-dips",
      img: tricepDips,
      name: "Tricep dips"
    },
    {
      id: "arms-bench-dips",
      img: benchDip,
      name: "Bench dips"
    },
    {
      id: "arms-close-grip-bench-press",
      img: closeGripBenchPress,
      name: "Close grip bench press"
    },
    {
      id: "arms-standing-triceps-extension",
      img: standingTricepsExtension,
      name: "Standing triceps extension"
    },
    {
      id: "arms-dumbbell-french-press",
      img: dumbbellFrenchPress,
      name: "Dumbbell french press"
    },
    {
      id: "arms-lying-triceps-extension",
      img: lyingTricepsExtension,
      name: "Lying triceps extension"
    },
    {
      id: "arms-cable-rope-tricep-pushdown",
      img: cableRopeTricepPushdown,
      name: "Rope triceps push-down"
    }
  ]
};
