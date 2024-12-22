const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isrunning=false;

startBtn.onclick=start;
stopBtn.onclick=stop;
resetBtn.onclick=reset;

function start(){
    if(!isrunning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isrunning=true;
    }
}
function stop(){
    if (isrunning){
        clearInterval(timer);
        elapsedTime=Date.now()-startTime;
        isrunning=false;
    }
}
function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isrunning=false;
    display.textContent="00:00:00:00"
}
function update(){
    elapsedTime=Date.now()-startTime;
    let hour = Math.floor(elapsedTime/(1000*60*60)).toString().padStart(2,0);
    let minutes = Math.floor(elapsedTime/(1000*60)%60).toString().padStart(2,0);
    let seconds = Math.floor(elapsedTime/1000%60).toString().padStart(2,0);
    let milliseconds =Math.floor(elapsedTime%1000/10).toString().padStart(2,0);
    display.textContent=`${hour}:${minutes}:${seconds}:${milliseconds}`
}
