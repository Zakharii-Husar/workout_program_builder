import React, { useState, useEffect } from 'react';
import './Timer.css';
import {icons} from './data';

function Timer(props) {
    let trainingTime = props.time;

    let min = Math.floor(trainingTime / 60);
    let sec = trainingTime - min * 60;

    const [timerIsOn, setTimerIsOn] = useState(false);
    const [seconds, setSeconds] = useState(sec);
    const [minutes, setMinutes] = useState(min);
    const [miliseconds, setMiliseconds] = useState(0);

    useEffect(()=>{
       if(!seconds && seconds !== 0) setSeconds(sec);
       if(!minutes && minutes !== 0) setMinutes(min);
    }, [props])
    


    useEffect(()=>{
    let milisecondInterval;
    let secondsInterval;
    let minutesInterval;

    if(timerIsOn){
        milisecondInterval = setInterval(()=> {setMiliseconds(prev => prev - 1)}, 1);
        secondsInterval = setInterval(()=> {setSeconds(prev => prev - 1)}, 1000);
    }else{
        clearInterval(milisecondInterval);
        clearInterval(secondsInterval);
    };

    return () =>{
        clearInterval(milisecondInterval);
        clearInterval(secondsInterval);
    }
    },[timerIsOn]);



    const reset = () => {
        setTimerIsOn(false);
        setMiliseconds(0);
        setSeconds(sec);
        setMinutes(min);
    }

    useEffect(()=>{
        if(seconds < 0){
            setSeconds(59);
            if(minutes > 0) setMinutes(prev => prev - 1);
        }
        if(miliseconds < 0){
            setMiliseconds(99);
        }
        if(miliseconds == 0 && seconds == 0 && minutes == 0){
            reset();
        }
    }, [miliseconds, seconds, minutes]);


  return (
    <div style={props.mainVisibility} className="Timer">
        <h2>{minutes < 10 ? "0"+ minutes : minutes}:
        {seconds < 10 ? "0"+ seconds : seconds}:
        {miliseconds < 10 ? "0"+ miliseconds : miliseconds}</h2>
        <div className="buttonsContainer">
            <img src={timerIsOn ? icons.pause : icons.start} onClick={()=>timerIsOn ? setTimerIsOn(false) : setTimerIsOn(true)}/>
            <img src={icons.stop} onClick={()=>reset()}/>
        </div>
    </div>
  );
}

export default Timer;