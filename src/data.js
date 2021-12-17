import arrow from './arrow.png';

import add from './icons/add.png';
import check from './icons/check.png';
import remove from './icons/delete.png';
import greendot from './icons/greendot.png';
import reddot from './icons/reddot.png';

import chest from './muscles/chest.jpg';
import back from './muscles/back.jpg';
import arms from './muscles/arms.jpg';
import legs from './muscles/legs.jpg';
import core from './muscles/core.jpg';
import shoulders from './muscles/shoulders.jpg';

import squats from './exercises/squats.png';
import dumbellcurls from './exercises/dumbellcurls.png';
import crunches from './exercises/crunches.png';
import benchpress from './exercises/benchpress.png';
import deadlift from './exercises/deadlift.png';
import armypress from './exercises/armypress.png';

export const icons = {
    arrow,
    add,
    check,
    remove,
    greendot,
    reddot
};


export const musclesGroups = [
    {
      img: arms,
      name: "Armss",
      exercises:[ {
        img: dumbellcurls,
        name: "Dumbellcurls"
      }
    ]},
    {
      img: back,
      name: "Back",
      exercises: [{
        img: deadlift,
        name: "Deadlift"
      }]
    },
    {
      img: chest,
      name: "Chest",
      exercises:[ {
        img: benchpress,
        name: "Benchpress"
      }
    ]
    },
    {
      img: legs,
      name: "Legs",
      exercises: [{
        img: squats,
        name: "Squats"
      }]
    },
    {
      img: core,
      name: "Core",
      exercises: [{
        img: crunches,
        name: "Crunches"
      }]
    },
    {
      img: shoulders,
      name: "Shoulders",
      exercises: [{
        img: armypress,
        name: "Army press"
      }]
    }
  ];
