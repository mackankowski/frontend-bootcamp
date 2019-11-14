let time = 0;
let isOn = false;
let offset;
let interval;

const toogleBtn = document.getElementById('toogle');
const resetBtn = document.getElementById('reset');
const display = document.getElementById('display');

delta = () => {
  let now = Date.now();
  let timePassed = now - offset;

  offset = now;
  return timePassed;
};

timeFormatter = timeInMiliseconds => {
  let time = new Date(timeInMiliseconds);
  let miliseconds = time.getMilliseconds().toString();
  let seconds = time.getSeconds().toString();
  let minutes = time.getMinutes().toString();

  if (miliseconds.length < 3) miliseconds = '0' + miliseconds;

  // miliseconds = miliseconds.length < 3 ? "0" + miliseconds : miliseconds

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  return `${minutes} : ${seconds} : ${miliseconds}`;
};

stopWatch = () => {
  time += delta();
  let formattedTime = timeFormatter(time);
  display.innerHTML = formattedTime;
};

startStop = () => {
  if (!isOn) {
    interval = setInterval(stopWatch, 10);
    toogleBtn.innerHTML = 'Stop';
    offset = Date.now();
    isOn = true;
  } else {
    clearInterval(interval);
    toogleBtn.innerHTML = 'Start';
    isOn = false;
  }
};

reset = () => {
  clearInterval(interval);
  time = 0;
  isOn = false;

  display.innerHTML = '00 : 00 : 000';
  toogleBtn.innerHTML = 'Start';
};

toogleBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
