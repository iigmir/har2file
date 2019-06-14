const mime_table = require("./mime_table");

/**
 * Write files.
 * @param {Array} file_positison - File positison.
 * @param {Object} mmie_info - MIME type info
 * @param {String} content_text - Texts waiting to write.
 */
module.exports = function({ file_positison, mmie_info, content_text })
{
    // let project_name = file_positison[2];
    let positison = file_positison;
    
    let create_files_func = create_project_error =>
    {
        debugger;
        if (create_project_error) throw create_project_error;
    };
    // create_project({ name, number:0 });
};
