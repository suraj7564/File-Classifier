let fs = require('fs');
let path = require('path');

function treeFn(dirPath){
    console.log("tree command inmplemented for ", dirPath);
    if(dirPath == undefined){
        treeHelper(process.cwd(), "");
        return;
    }
    else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath, "");
        }else {
            console.log("Kindly Enter the correct path!");
            return;
        }
    }
}

function treeHelper(dirPath, indent){
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent + "├── "+ fileName);
    }
    else{
        let dirName = path.basename(dirPath);
        console.log(indent + "└── " +dirName);
        let children = fs.readdirSync(dirPath);
        for(let child of children){
            let childPath = path.join(dirPath, child);
            treeHelper(childPath, indent+"\t");
        }
    }
}

module.exports = {
    treeKey : treeFn
}