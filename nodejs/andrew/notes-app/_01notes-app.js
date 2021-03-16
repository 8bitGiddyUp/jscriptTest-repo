"use strict";

/*
  how to shorten powershell prompt
  https://devblogs.microsoft.com/scripting/powertip-change-the-powershell-prompt/
  
  function prompt{"> "}  <enter>
*/

const fs = require("fs");

fs.writeFileSync("notes.txt", "node.js a modular server script");
fs.appendFileSync("notes.txt", "I'm continuing where I left off");
