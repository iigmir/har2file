const fs = require("fs");
let filename = "";

const main = require("./src/index");

if (process.argv.length < 3)
{   // Make sure we got a filename on the command line.
    console.log( "Usage: node " + process.argv[1] + " FILENAME");
    process.exit(1);
}

filename = process.argv[2];
fs.readFile(filename, "utf8", (err, data) => main(err, data) );
