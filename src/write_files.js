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
        return dist_path;
    };
    create_project({ name: project_name, number: 1 });
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
