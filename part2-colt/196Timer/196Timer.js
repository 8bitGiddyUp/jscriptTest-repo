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
//timer.start();

/*
  this -> dom window
*/
// console.log(this);
// const printThis = () => {
//   console.log(this);
// };
// printThis();






// const colors = {
//   printColor() {

//     console.log("colors ->",this);
//     const printThis = () => {
//       console.log("colors ->", this);
//     }

//     printThis();
//   }// printColor()
// };

// colors.printColor();




// const printThis = function(){
//   console.log(this);
// }

// printThis.call({color: 'red'});
// printThis({color: 'blue'});
// printThis();



// const colors = {
//   printColor(){
//     console.log(this);
//   }
// };

// const someObject = {
//   a: 1
// };

// let pcolor = colors.printColor;
// pcolor();

// someObject.printColor = colors.printColor;
// someObject.printColor();