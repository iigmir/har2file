const fs = require("fs");
const mime_table = require("./mime_table");

/**
 * Write files.
 * @param {Array} file_positison - File positison
 * @param {Object} mime_type - MIME type info
 * @param {String} content_text - Texts waiting to write.
 */
module.exports = function({ file_positison, mime_type, content_text })
{
    // file_positison will filter "http(s)", "", "example.com" .slice(3)
    let project_name = file_positison[2];
    
    let create_files_func = ({ create_project_error }) =>
    {
        if (create_project_error) throw create_project_error;
    };
    create_project({ name: "dist/" + project_name, number:0, callback: create_files_func({ create_project_error: err }) });
};
