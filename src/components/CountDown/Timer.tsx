import React, { useEffect, useState } from 'react'
import { Countdown } from './Countdown';


export const Timer = () => {
const [timerDays,setTimerDays]=useState(0);
const [timerHours,setTimerHours]=useState(0)
const [timerMinutes,setTimerMinutes]=useState(0);
const [timerSecond,setTimerSeconds]=useState(0)

let interval:number


const startTimer=()=>{
  const CountdownDate= new Date("Dec 11,2021").getTime();

  interval= setInterval(()=>{
    const now= new Date().getTime();

    const distance =CountdownDate - now;

    const days = Math.floor((distance / (24*60*60*1000) ));

    const hours= Math.floor((distance % (24*60*60*1000))/ (1000*60*60));

    const minutes= Math.floor((distance % (60*60*1000) / (1000*60) ));

    const seconds =Math.floor ((distance% (60 * 1000))/ 1000);

    if(distance<0){
      clearInterval(interval)
    }else{
      setTimerDays(days)
      setTimerHours(hours);
      setTimerMinutes(minutes)
      setTimerSeconds(seconds)
    }

  },)
}
  useEffect(()=>{
    startTimer();
  })

    return (
        
     <Countdown  timerHours={timerHours} timerDays={timerDays} timerMinutes={timerMinutes} timerSeconds={timerSecond} />
    
    )
}
