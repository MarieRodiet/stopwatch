//create 3 global variables
var isRunning = false;
var timer = null;
var timerTime = 0;

function init(){
    var startBtn = document.getElementById("start");
    var stopBtn = document.getElementById("stop");
    var resetBtn = document.getElementById("reset");

    startBtn.onclick = startTimer;
    stopBtn.onclick = stopTimer;
    resetBtn.onclick = resetTimer;
}

function startTimer(){
    if (!isRunning){
        isRunning = true;
        timer = setInterval(incrementTimer, 1000);
    }
}

function incrementTimer(){
    timerTime++;
    var minutes = Math.floor(timerTime/60);
    var seconds = Math.floor(timerTime % 60);

    document.getElementById("minutes").innerHTML = pad(minutes);
    document.getElementById("seconds").innerHTML = pad(seconds);

}

function pad(number){
    return (number < 10) ? "0" + number : number;
}

function stopTimer(){
    if(isRunning){
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer(){
    stopTimer();
    timerTime = 0;
    document.getElementById("minutes").innerHTML = pad(0);
    document.getElementById("seconds").innerHTML = pad(0);
}

window.onload = init;

