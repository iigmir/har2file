const fs = require("fs");

/**
 * Create following directory:
 * /dist/foo
 * /dist/foo2
 * /dist/foo3
 * /dist/foo4
 * ... And so on
 * @param {string} name - Project name. I.E. "www.example.com".
 * @param {string} number - This will be useful if project exists.
 */
let create_project = ({ name, number }) =>
{
    let temp_number = number + 1;
    let tmep_str = temp_number > 1 ? String( temp_number ) : "";
    let dist_path = name + tmep_str;
    if( fs.existsSync(dist_path) )
    {
        return create_project({ name, number: temp_number });
    }
    fs.mkdir( dist_path, { recursive: true }, error =>
    {
        if (error) throw error;
        console.log("Project created.");
    });
    return dist_path;
};

module.exports = create_project;
