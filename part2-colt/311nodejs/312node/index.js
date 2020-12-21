#!/usr/bin/env node

// console.log("+++",exports);
// console.log("+++",require);
// console.log("+++",module);
// console.log("+++",__filename);
// console.log("+++",__dirname);

const fs = require('fs');
fs.readdir(process.cwd(), (err, filenames) => {
  // either
  // err === an error obj -> error
  // or
  // err === null obj -> ok
  if (err) {
    // handles err
    console.log(err);
  }

  console.log(filenames);

});