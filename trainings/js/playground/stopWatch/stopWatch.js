let miliseconds = 0;
let seconds = 0;
let minutes = 0; 

let displayMiliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;

let interval = null;
let isOn = false;

formatDate = () => {
    let time = new Date();

     if(miliseconds < 100) {
        displayMiliseconds = "0" + miliseconds;
    } else {
        displayMiliseconds = miliseconds;
    }

    if(seconds < 10) {
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }

    if(minutes < 10) {
        displayMinutes = "0" + minutes;
    } else {
        displayMinutes = minutes;
    }

}

stopWatch = () => {
    miliseconds++;

    if(miliseconds % 1000 === 0) {
        miliseconds = 0;
        seconds++;

        if(seconds % 60 === 0) {
            seconds = 0;
            minutes++;
        }

    }

    formatDate();

    document.getElementById("display").innerHTML= `${displayMinutes} : ${displaySeconds} : ${displayMiliseconds}` 

}

 const toogleBtn = document.getElementById("toogle");

startStop = () => {
    if (!isOn) {
        interval = setInterval(stopWatch, 1);
        toogleBtn.innerHTML = "Stop";
        isOn = true;
    } else {
        clearInterval(interval)
        toogleBtn.innerHTML = "Start"
        isOn = false;
    }
}

reset = () => {
    clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;

    document.getElementById("display").innerHTML = "00 : 00 : 000";
    document.getElementById("toogle").innerHTML = "Start";
}

toogleBtn.addEventListener("click", startStop);
document.getElementById("reset").addEventListener("click", reset)


