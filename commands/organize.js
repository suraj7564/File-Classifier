let fs = require('fs');
let path = require('path');
let util = require('../utility');

function organiseFn(dirPath){
    console.log("organise command inmplemented for ", dirPath);
    // 1. input -> directory path given
    let destPath;
    if(dirPath == undefined){
        destPath = process.cwd();
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            // 2. create -> organised file -> directory
            destPath = path.join(dirPath, "organised_file");
            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath);
            }
        }else {
            console.log("Kindly Enter the correct path!");
            return;
        }
    }
    organiseHelper(dirPath, destPath);
}

function organiseHelper(src, dest){
     // 3. identify category of all files present in input directory
    let childName = fs.readdirSync(src);
    //console.log(childName);
    for(let child of childName){
        let childAddress = path.join(src, child);
        //console.log(childAddress);
        let isFIle = fs.lstatSync(childAddress).isFile();
        if(isFIle){
            //console.log(child);
            let category = getCategory(child);
            //console.log(category);
            // 4. copy/cut file to organise folder
            sendFile(childAddress, dest, category);
        }
    }
}

function sendFile(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category);
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destPath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destPath);
    //fs.unlinkSync(srcFilePath);
}

function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in util.types){
        for(let cur of util.types[type]){
            //console.log(cur + " " + ext);
            if(cur == ext){
                return type;
            }
        }
    }
    return "others";
}

module.exports = {
    organizeKey : organiseFn
}