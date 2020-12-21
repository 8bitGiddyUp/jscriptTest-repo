/*
  the bug is when "hello there" is changed to "bye there", the 'bye there'
  doesn't replace the 'hello there'; both are output to terminal;

  to prevent this copying of the scripts multiple times, changes are needed
  in index.js -> proc.kill() is used
*/
setInterval(() => {
  console.log("1nd hello there");
}, 1000);