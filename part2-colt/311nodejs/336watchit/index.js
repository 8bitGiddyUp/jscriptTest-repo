#!/usr/bin/env node

console.log('I was executed...');
const chokidar = require('chokidar');
const debounce = require('lodash.debounce');
const program = require('caporal');
const fs = require('fs');
const {spawn} = require('child_process');

program
  .version('0.0.1')
  .argument('[filename]', 'name of a file to execute')
  .action(async ({filename}) => {
    const name = filename || 'index.js';

    try {
      await fs.promises.access(name);
    }
    catch (err) {
      throw new Error(`could not find the file ${name}`);
    }

    /*
      to stop the duplication of processes
    */
    let proc = null;

    const start = debounce(() => {
      if (proc) {
        proc.kill();
      }
      console.log('>>>>> starting process...');
      proc = spawn('node', [name], {stdio: 'inherit'});
      console.log("proc: ", proc);
    }, 100);

    chokidar
      .watch('.')
      .on('add', start)
      .on('change', start)
      .on('unlink', start);
  });
program
  .parse(process.argv);


