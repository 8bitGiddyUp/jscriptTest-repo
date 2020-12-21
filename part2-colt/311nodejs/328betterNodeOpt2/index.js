#!/usr/bin/env node

const fs = require('fs');

/*
  option 1: wrapping 'lstat' into the "promise"
*/
const lstatOpt1 = (filename) => {
  return new Promise((resolve, reject) => {
    fs.lstat(filename, (err, stats) => {
      if (err) {
        reject(err);
      }

      resolve(stats);
    });
  });
};

/*
  option 2: using util module
*/
const util = require('util');
const lstatOpt2 = util.promisify(fs.lstat);

/*
  option 3: fs Promises API
    fsPromises.<methods|properties> -> promise based 'fs'

    const lstatOpt3 = fs.promises.lstat;
*/
const {lstat:lstatOpt3} = fs.promises;

/*
  using three different types of "lstatOpt<1|2|3>"
*/
fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  for (let filename of filenames) {
    try {
      const stats = await lstatOpt1(filename);
      console.log(filename, stats.isFile());
    }
    catch (err) {
      console.log(err);
    }
  }// for let filename
});