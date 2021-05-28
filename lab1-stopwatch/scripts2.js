class StopWatch{
    constructor(){
        this.isRunning = false;
        this.timer = null;
        this.timerTime = 0;

        this.startBtn = document.getElementById("start");
        this.stopBtn = document.getElementById("stop");
        this.resetBtn = document.getElementById("reset");

        //event handlers that need binding to the stopwatch class functions
        this.startBtn.onclick = this.startTimer.bind(this);
        this.stopBtn.onclick = this.stopTimer.bind(this);
        this.resetBtn.onclick = this.resetTimer.bind(this);
    }
    startTimer(){
        if(this.isRunning == false){
            this.isRunning = true;
            this.timer = setInterval(this.incrementTimer.bind(this), 1000);

        }
    }

    incrementTimer(){
        this.timerTime++;
        let minutes = Math.floor(this.timerTime/60);
        let seconds = Math.floor(this.timerTime%60);

        document.getElementById("minutes").innerHTML = this.pad(minutes);
        document.getElementById("seconds").innerHTML = this.pad(seconds);
    
    }

    pad(number){
        return (number < 10) ? "0" + number : number;
    }
    
    stopTimer(){
        if(this.isRunning){
            this.isRunning = false;
            clearInterval(this.timer);
        }
    }
    
    resetTimer(){
        this.stopTimer();
        this.timerTime = 0;
        document.getElementById("minutes").innerHTML = this.pad(0);
        document.getElementById("seconds").innerHTML = this.pad(0);
    }
}
let stopWatch;
window.onload = () => {stopWatch = new StopWatch();};