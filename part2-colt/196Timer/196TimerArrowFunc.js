class Timer{
  constructor(durationInput, startButton, pauseButton){
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    // this.timer = null;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }/* constructor */

  start = () => {
    console.log("time start button...");

    this.tick();
    this.interval = setInterval(this.tick, 1000);
  }

  tick = () => {
    console.log("tick");
  }

  pause = () => {
    console.log("pause button pressed...");
    clearInterval(this.interval);
  }
}/* class Timer */


const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
// timer.start();