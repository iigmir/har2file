const fs = require("fs");

/**
 * Write files.
 * @param {Array} file_positison - File positison
 * @param {Object} mime_type - MMIE type info
 * @param {String} content_text - Texts waiting to write.
 */
module.exports = function({ file_positison, mime_type, content_text })
{
    // file_positison will filter "http(s)", "", "example.com" .slice(3)
    // let path = "./dst/foo/bar.txt";
    // if( !fs.existsSync(path) )
    // {
    //     fs.mkdirSync(path, 0744);
    // }
    // fs.writeFile( path , "<contenet>" , err =>
    // {
    //     if (err) throw err;
    //     console.log('File is created successfully.');
    // });
};
