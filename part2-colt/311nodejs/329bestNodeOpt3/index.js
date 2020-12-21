#!/usr/bin/env node

const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const path = require('path');

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
const lstatOpt2 = util.promisify(fs.lstat);

/*
  option 3: fs Promises API
    fsPromises.<methods|properties> -> promise based 'fs'

    const lstatOpt3 = fs.promises.lstat;
*/
const {lstat:lstatOpt3} = fs.promises;

/*
  using three different types of "lstatOpt<1|2|3>"
    use one of the three lstat options:
      lstatOpt3
*/
const targetDir = process.argv[2] || process.cwd();
console.log("+++ ", targetDir);

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map(filename => {
    return lstatOpt3(path.join(targetDir, filename));
  });

  /*
    Promise.all perform faster due to running parallel
  */
  const allStats = await Promise.all(statPromises);
  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[index]);
    }
    else {
      console.log(chalk.bold(filenames[index]));
    }
  }
});