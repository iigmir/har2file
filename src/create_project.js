/**
 * Create following directory:
 * /dist/foo
 * /dist/foo2
 * /dist/foo3
 * /dist/foo4
 * ... And so on
 * @param {string} name - Project name
 * @param {string} number - If project exists, increse number that will be useful.
 * @param {function} callback - If create success, call this param function.
 */

const fs = require("fs");
module.exports = ({ name, number, callback }) =>
{
    let temp_number = number + 1;
    let tmep_str = temp_number > 1 ? String( temp_number ) : "";
    let dist_path = name + tmep_str;
    if( fs.existsSync(dist_path) )
    {
        return create_project({ name, number: temp_number });
    }
    fs.mkdir( dist_path, { recursive: true }, err => callback(err) );
    return;
};
