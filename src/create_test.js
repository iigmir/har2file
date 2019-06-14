const fs = require("fs");

let init = path =>
{
    if( !fs.existsSync(path) )
    {
        let regex_has_dot = /\./g;
        let write_path = path;
        let path_array = path.split("/");
        if( regex_has_dot.test(path_array[path_array.length-1]) === true )
        {
            path_array.pop();
            write_path = path_array.join("/");
        }
        fs.mkdir(write_path, { recursive: true }, err => create_files(err) );
    }
};

let create_files = recevied_error =>
{
    if (recevied_error) throw recevied_error;
    fs.writeFile( path , "<contenet>" , err =>
    {
        if (err) throw err;
        console.log("File is created successfully.");
    });
};

module.exports = init(path);
