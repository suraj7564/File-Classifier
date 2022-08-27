function helpFn(){
    console.log(`
    List of All the command:
                node main.js tree "directoryPath"
                node main.js organise "directorypath"
                node main.js help
    `);
}

module.exports = {
    helpKey : helpFn
}