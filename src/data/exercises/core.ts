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
      id: "core-crunches",
      img: crunches,
      name: "Crunches"
    },
    {
      id: "core-plank",
      img: plank,
      name: "Plank"
    },
    {
      id: "core-knee-hip-raises",
      img: kneeHipRaise,
      name: "Knee hip raises"
    },
    {
      id: "core-otis-up",
      img: otisUp,
      name: "Otis-up"
    },
    {
      id: "core-bench-sit-up",
      img: benchSitUp,
      name: "Bench sit-up"
    },
    {
      id: "core-upside-down",
      img: upsideDown,
      name: "Upside down"
    },
    {
      id: "core-bent-press",
      img: bentPress,
      name: "Bent press"
    },
    {
      id: "core-barbell-side-bend",
      img: barbellSideBend,
      name: "Barbell side bend"
    },
    {
      id: "core-farmer-walk",
      img: farmerWalk,
      name: "Farmer walk"
    },
    {
      id: "core-cable-crunch",
      img: cableCrunch,
      name: "Cable crunch"
    }
  ]
};
