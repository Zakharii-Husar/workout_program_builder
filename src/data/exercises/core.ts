// Core exercises data
import crunches from '../../assets/exercises_icons/core/crunches.png';
import plank from '../../assets/exercises_icons/core/plank.png';
import kneeHipRaise from '../../assets/exercises_icons/core/kneeHipRaise.png';
import otisUp from '../../assets/exercises_icons/core/otisUp.png';
import benchSitUp from '../../assets/exercises_icons/core/benchSitUp.png';
import upsideDown from '../../assets/exercises_icons/core/upsideDown.png';
import bentPress from '../../assets/exercises_icons/core/bentPress.png';
import barbellSideBend from '../../assets/exercises_icons/core/barbellSideBend.png';
import farmerWalk from '../../assets/exercises_icons/core/farmerWalk.png';
import cableCrunch from '../../assets/exercises_icons/core/cableCrunch.png';

import core from '../../assets/muscle_groups/core.png';
import { MuscleGroup } from '../../types';

export const coreExercises: MuscleGroup = {
  img: core,
  name: "Core",
  exercises: [
    {
      img: crunches,
      name: "Crunches"
    },
    {
      img: plank,
      name: "Plank"
    },
    {
      img: kneeHipRaise,
      name: "Knee hip raises"
    },
    {
      img: otisUp,
      name: "Otis-up"
    },
    {
      img: benchSitUp,
      name: "Bench sit-up"
    },
    {
      img: upsideDown,
      name: "Upside down"
    },
    {
      img: bentPress,
      name: "Bent press"
    },
    {
      img: barbellSideBend,
      name: "Barbell side bend"
    },
    {
      img: farmerWalk,
      name: "Farmer walk"
    },
    {
      img: cableCrunch,
      name: "Cable crunch"
    }
  ]
};
