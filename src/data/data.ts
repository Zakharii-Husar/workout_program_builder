import arrow from '../assets/arrow.png';

// React Icons imports
import { 
  FaPlus as AddIcon,
  FaCheck as CheckIcon,
  FaTrash as RemoveIcon,
  FaSquare as EmptySquareIcon,
  FaCheckSquare as CheckedSquareIcon,
  FaChevronDown as DownIcon,
  FaChevronUp as UpIcon,
  FaPlay as StartIcon,
  FaPause as PauseIcon,
  FaStop as StopIcon,
  FaSave as SaveIcon,
  FaCheckCircle as CorrectIcon,
  FaTimes as CancelIcon
} from 'react-icons/fa';

import chest from '../assets/muscle_groups/chest.png';
import back from '../assets/muscle_groups/back.png';
import arms from '../assets/muscle_groups/arms.png';
import legs from '../assets/muscle_groups/legs.png';
import core from '../assets/muscle_groups/core.png';
import shoulders from '../assets/muscle_groups/shoulders.png';

//ARMS EXERCISES
//biceps
import chinUp from '../assets/exercises_icons/biceps/chinUp.png';
import barbellCurl from '../assets/exercises_icons/biceps/barbellCurl.png';
import hammerCurl from '../assets/exercises_icons/biceps/hammerCurl.png';
import seatedDumbbellCurl from '../assets/exercises_icons/biceps/seatedDumbbellCurl.png';
import concentrationCurl from '../assets/exercises_icons/biceps/concentrationCurl.png';
import barbellPreacherCurl from '../assets/exercises_icons/biceps/barbellPreacherCurl.png';
import inclineDumbbellCurl from '../assets/exercises_icons/biceps/InclineDumbbellCurl.png';
//triceps
import narrowPushUps from '../assets/exercises_icons/triceps/narrowPushUps.png';
import tricepDips from '../assets/exercises_icons/triceps/tricepDips.png';
import benchDip from '../assets/exercises_icons/triceps/benchDip.png';
import closeGripBenchPress from '../assets/exercises_icons/triceps/closeGripBenchPress.png';
import standingTricepsExtension from '../assets/exercises_icons/triceps/standingTricepsExtension.png';
import dumbbellFrenchPress from '../assets/exercises_icons/triceps/dumbbellFrenchPress.png';
import lyingTricepsExtension from '../assets/exercises_icons/triceps/lyingTricepsExtension.png';
import cableRopeTricepPushdown from '../assets/exercises_icons/triceps/cableRopeTricepPushdown.png';

//BACK EXERCISES
import pullUp from '../assets/exercises_icons/back/pullUp.png';
import deadlift from '../assets/exercises_icons/back/deadlift.png';
import romanianDeadlift from '../assets/exercises_icons/back/romanianDeadlift.png';
import shrug from '../assets/exercises_icons/back/shrug.png';
import bentOverDumbbells from '../assets/exercises_icons/back/bentOverDumbbells.png';
import oneArmDumbbellRow from '../assets/exercises_icons/back/oneArmDumbbellRow.png';
import latPullDown from '../assets/exercises_icons/back/latPullDown.png';
import seatedCableRow from '../assets/exercises_icons/back/seatedCableRow.png';
import chestSupportedRow from '../assets/exercises_icons/back/chestSupportedRow.png';

//CHEST EXERCISES
import pushUps from '../assets/exercises_icons/chest/pushUps.png';
import inclinePushUps from '../assets/exercises_icons/chest/inclinePushUps.png';
import declinePushUps from '../assets/exercises_icons/chest/declinePushUps.png';
import chestDips from '../assets/exercises_icons/chest/chestDips.png';
import flatBenchPress from '../assets/exercises_icons/chest/flatBenchPress.png';
import dumbbellPress from '../assets/exercises_icons/chest/dumbbellPress.png';
import inclineBenchPress from '../assets/exercises_icons/chest/inclineBenchPress.png';
import inclineDumbbellPress from '../assets/exercises_icons/chest/inclineDumbbellPress.png';
import declineBenchPress from '../assets/exercises_icons/chest/declineBenchPress.png';
import dumbbellFly from '../assets/exercises_icons/chest/dumbbellFly.png';
import pectoralFly from '../assets/exercises_icons/chest/pectoralFly.png';
import cableCrossover from '../assets/exercises_icons/chest/cableCrossover.png';

//LEGS EXERCISES
import squat from '../assets/exercises_icons/legs/squat.png';
import dumbbellSquat from '../assets/exercises_icons/legs/dumbbellSquat.png';
import reverseLunge from '../assets/exercises_icons/legs/reverseLunge.png';
import nordicHamstringCurl from '../assets/exercises_icons/legs/nordicHamstringCurl.png';
import barbellBackSquat from '../assets/exercises_icons/legs/barbellBackSquat.png';
import barbellFrontSquat from '../assets/exercises_icons/legs/barbellFrontSquat.png';
import legPress from '../assets/exercises_icons/legs/legPress.png';
import lyingLegCurl from '../assets/exercises_icons/legs/lyingLegCurl.png';
import barbellHipThrust from '../assets/exercises_icons/legs/barbellHipThrust.png';
import standingCalfRaise from '../assets/exercises_icons/legs/standingCalfRaise.png';
import seatedCalfRaise from '../assets/exercises_icons/legs/seatedCalfRaise.png';

//SHOULDERS EXERCISES
import militaryPress from '../assets/exercises_icons/shoulders/militaryPress.png';
import militaryDumbbellPress from '../assets/exercises_icons/shoulders/militaryDumbbellPress.png';
import seatedBarbellPress from '../assets/exercises_icons/shoulders/seatedBarbellPress.png';
import seatedDumbbellPress from '../assets/exercises_icons/shoulders/seatedDumbbellPress.png';
import bottomsUpKettlebellPress from '../assets/exercises_icons/shoulders/bottomsUpKettlebellPress.png';
import dumbbellLateralRaise from '../assets/exercises_icons/shoulders/dumbbellLateralRaise.png';
import frontDumbbellRaise from '../assets/exercises_icons/shoulders/frontDumbbellRaise.png';
import leverageShoulderPress from '../assets/exercises_icons/shoulders/leverageShoulderPress.png';

//CORE EXERCISES
import crunches from '../assets/exercises_icons/core/crunches.png';
import plank from '../assets/exercises_icons/core/plank.png';
import kneeHipRaise from '../assets/exercises_icons/core/kneeHipRaise.png';
import otisUp from '../assets/exercises_icons/core/otisUp.png';
import benchSitUp from '../assets/exercises_icons/core/benchSitUp.png';
import upsideDown from '../assets/exercises_icons/core/upsideDown.png';
import bentPress from '../assets/exercises_icons/core/bentPress.png';
import barbellSideBend from '../assets/exercises_icons/core/barbellSideBend.png';
import farmerWalk from '../assets/exercises_icons/core/farmerWalk.png';
import cableCrunch from '../assets/exercises_icons/core/cableCrunch.png';

export const icons = {
    arrow,
    add: AddIcon,
    check: CheckIcon,
    remove: RemoveIcon,
    emptySquare: EmptySquareIcon,
    checkedSquare: CheckedSquareIcon,
    down: DownIcon,
    up: UpIcon,
    start: StartIcon,
    pause: PauseIcon,
    stop: StopIcon,
    save: SaveIcon,
    correct: CorrectIcon,
    cancel: CancelIcon
};

export const muscleGroups = [
    {
      img: arms,
      name: "Arms",
      exercises:[ 
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
    ]},
    {
      img: back,
      name: "Back",
      exercises: [{
        img: pullUp,
        name: "Pull-ups"
      },{
        img: deadlift,
        name: "Deadlift"
      },{
        img: romanianDeadlift,
        name: "Romanian deadlift"
      },{
        img: shrug,
        name: "Shrugs"
      },{
        img: bentOverDumbbells,
        name: "Bent over row"
      },{
        img: oneArmDumbbellRow,
        name: "One arm dumbbell row"
      },{
        img: latPullDown,
        name: "Lat pull down"
      },{
        img: seatedCableRow,
        name: "Seated cable row"
      },{
        img: chestSupportedRow,
        name: "Chest supported row"
      }]
    },
    {
      img: chest,
      name: "Chest",
      exercises:[ 
      {
        img: pushUps,
        name: "Push-ups"
      },
      {
        img: inclinePushUps,
        name: "Incline push-ups"
      },
      {
        img: declinePushUps,
        name: "Decline push-ups"
      },
      {
        img: chestDips,
        name: "Chest dips"
      },
      {
        img: flatBenchPress,
        name: "Bench press"
      },
      {
        img: dumbbellPress,
        name: "Dumbbell press"
      },
      {
        img: inclineBenchPress,
        name: "Incline bench press"
      },
      {
        img: inclineDumbbellPress,
        name: "Incline dumbbell press"
      },
      {
        img: declineBenchPress,
        name: "Decline bench press"
      },
      {
        img: dumbbellFly,
        name: "Dumbbell fly"
      },
      {
        img: pectoralFly,
        name: "Pectoral fly"
      },
      {
        img: cableCrossover,
        name: "Cable crossover"
      }
    ]
    },
    {
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
    },
    {
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
    },
    {
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
    }
  ];
