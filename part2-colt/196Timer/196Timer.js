console.log("hello there");

class Timer{
  constructor(durationInput, startButton, pauseButton){
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }/* constructor */

  start(){
    console.log("start button pressed...");
  }

  pause(){
    console.log("pause button pressed...");
  }
}/* class Timer */


const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);