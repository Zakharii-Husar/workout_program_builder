import arrow from './arrow.png';

import add from './icons/add.png';
import check from './icons/check.png';
import remove from './icons/delete.png';
import greendot from './icons/greendot.png';
import reddot from './icons/reddot.png';
import down from './icons/down.png';
import up from './icons/up.png';
import start from './icons/start.png';
import pause from './icons/pause.png';
import stop from './icons/stop.png';
import save from './icons/save.png';
import correct from './icons/correct.png';
import cancel from './icons/cancel.png';

import chest from './muscles/chest.png';
import back from './muscles/back.png';
import arms from './muscles/arms.png';
import legs from './muscles/legs.png';
import core from './muscles/core.png';
import shoulders from './muscles/shoulders.png';

//ARMS EXERCISES
//biceps
import chinUp from './biceps/chinUp.png';
import barbellCurl from './biceps/barbellCurl.png';
import hammerCurl from './biceps/hammerCurl.png';
import seatedDumbbellCurl from './biceps/seatedDumbbellCurl.png';
import concentrationCurl from './biceps/concentrationCurl.png';
import barbellPreacherCurl from './biceps/barbellPreacherCurl.png';
import InclineDumbbellCurl from './biceps/InclineDumbbellCurl.png';
//triceps
import narrowPushUps from './triceps/narrowPushUps.png';
import tricepDips from './triceps/tricepDips.png';
import benchDip from './triceps/benchDip.png';
import closeGripBenchPress from './triceps/closeGripBenchPress.png';
import standingTricepsExtension from './triceps/standingTricepsExtension.png';
import dumbbellFrenchPress from './triceps/dumbbellFrenchPress.png';
import lyingTricepsExtension from './triceps/lyingTricepsExtension.png';
import cableRopeTricepPushdown from './triceps/cableRopeTricepPushdown.png';

//BACK EXERCISES
import pullUp from './back/pullUp.png';
import deadlift from './back/deadlift.png';
import romanianDeadlift from './back/romanianDeadlift.png';
import shrug from './back/shrug.png';
import bentOverDumbbells from './back/bentOverDumbbells.png';
import oneArmDumbbellRow from './back/oneArmDumbbellRow.png';
import latPullDown from './back/latPullDown.png';
import seatedCableRow from './back/seatedCableRow.png';
import chestSupportedRow from './back/chestSupportedRow.png';

//CHEST EXERCISES
import pushUps from './chest/pushUps.png';
import inclinePushUps from './chest/inclinePushUps.png';
import declinePushUps from './chest/declinePushUps.png';
import chestDips from './chest/chestDips.png';
import flatBenchPress from './chest/flatBenchPress.png';
import dumbbellPress from './chest/dumbbellPress.png';
import inclineBenchPress from './chest/inclineBenchPress.png';
import inclineDumbbellPress from './chest/inclineDumbbellPress.png';
import declineBenchPress from './chest/declineBenchPress.png';
import dumbbellFly from './chest/dumbbellFly.png';
import pectoralFly from './chest/pectoralFly.png';
import cableCrossover from './chest/cableCrossover.png';

//LEGS EXERCISES
import squat from './legs/squat.png';
import dumbbellSquat from './legs/dumbbellSquat.png';
import reverseLunge from './legs/reverseLunge.png';
import nordicHamstringCurl from './legs/nordicHamstringCurl.png';
import barbellBackSquat from './legs/barbellBackSquat.png';
import barbellFrontSquat from './legs/barbellFrontSquat.png';
import legPress from './legs/legPress.png';
import lyingLegCurl from './legs/lyingLegCurl.png';
import barbellHipThrust from './legs/barbellHipThrust.png';
import standingCalfRaise from './legs/standingCalfRaise.png';
import seatedCalfRaise from './legs/seatedCalfRaise.png';

//SHOULDERS EXERCISES
import militaryPress from './shoulders/militaryPress.png';
import militaryDumbbellPress from './shoulders/militaryDumbbellPress.png';
import seatedBarbellPress from './shoulders/seatedBarbellPress.png';
import seatedDumbbellPress from './shoulders/seatedDumbbellPress.png';
import bottomsUpKettlebellPress from './shoulders/bottomsUpKettlebellPress.png';
import dumbbellLateralRaise from './shoulders/dumbbellLateralRaise.png';
import frontDumbbellRaise from './shoulders/frontDumbbellRaise.png';
import leverageShoulderPress from './shoulders/leverageShoulderPress.png';

//CORE EXERCISES
import crunches from './core/crunches.png';
import plank from './core/plank.png';
import kneeHipRaise from './core/kneeHipRaise.png';
import otisUp from './core/otisUp.png';
import benchSitUp from './core/benchSitUp.png';
import upsideDown from './core/upsideDown.png';
import bentPress from './core/bentPress.png';
import barbellSideBend from './core/barbellSideBend.png';
import farmerWalk from './core/farmerWalk.png';
import cableCrunch from './core/cableCrunch.png';



export const icons = {
    arrow,
    add,
    check,
    remove,
    greendot,
    reddot,
    down,
    up,
    start,
    pause,
    stop,
    save,
    correct,
    cancel
};


export const musclesGroups = [
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
        img: InclineDumbbellCurl,
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
        name: "Dumbell french press"
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
        name: "Barbell side bent"
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
