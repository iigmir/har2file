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
    /**
     * Create following directory:
     * /dist/foo
     * /dist/foo2
     * /dist/foo3
     * /dist/foo4
     * ... And so on
     * @param {string} name - project name
     * @param {string} number - If project exists, increse number that will be useful.
     */
    let create_project = ({ name, number }) =>
    {
        let dist_path = "/dist/" + name;
        let temp_number = number + 1;
        if( fs.existsSync(dist_path) )
        {
            return create_project({ name, number: temp_number });
        }
        // fs.mkdirSync(dist_path, 0777);
        fs.mkdir(
            dist_path,
            { recursive: true },
            err => create_files({
                file_positison,
                mime_type,
                content_text,
                create_project_error: err
            })
        );
        return;
    };
    let create_files = ({ create_project_error }) =>
    {
        if (create_project_error) throw create_project_error;
        debugger;
    };
    create_project({ name: project_name, number: 1 });
};
