#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let helpObj = require('./commands/help');
let treeObj = require('./commands/tree');
let orgnizeObj = require('./commands/organize');
console.log(inputArr);

// node main.js tree "directoryPath"
// node main.js organise "directorypath"
// node main.js help

let command = inputArr[0];

switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        orgnizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please 🙏 Input right command !");
        break;
}





