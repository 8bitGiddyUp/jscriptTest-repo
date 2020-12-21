#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const allStats = Array(filenames.length).fill(null);
  for (let filename of filenames){
    const index = filenames.indexOf(filename);

    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }

      allStats[index] = stats;
      /*
        "ready" is true when every array cell is not 'null'; otherwise, "ready"
        is 'falsy'
      */
      const ready = allStats.every((stats) => {
        return stats;
      });

      console.log("bfn: ", filename);
      if (ready) {
        console.log("afn: ", filename);
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile());
        });
      }
    });
  }// for let filename
});