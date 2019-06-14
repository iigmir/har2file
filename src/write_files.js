const mime_table = require("./mime_table");
const fs = require("fs");

/**
 * Write files.
 * @param {Array}  file_positison - File positison.
 * @param {Object} mime_info - MIME type info
 * @param {String} content_text - Texts waiting to write.
 * @param {String} project_name - Where project is
 */
module.exports = function({ file_positison, mime_info, content_text, project_name })
{
    let pathes = file_positison.slice(1);
    let content_file_name = "";
    let content_name = "";
    let content_ext = mime_table[ mime_info.type[1] ];
    let file_name = "";
    if( mime_info.type[1] === "html" && file_positison[1] === "" )
    {
        content_name = "/index";
    }
    file_name = project_name + content_name + content_ext;
    fs.writeFile( file_name, content_text, err =>
    {
        if (err) throw err;
        console.log("index.html file has been saved!");
        return;
    });
    
    let create_files_func = create_project_error =>
    {
        if (create_project_error) throw create_project_error;
    };
    // create_project({ name, number:0 });
};
