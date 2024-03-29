const render_har = require("./render_har");

module.exports =  function(err, data)
{   // Read the file and print its contents.
    let parsed_json = {};
    if (err) throw err;
    try {
        parsed_json = JSON.parse( data );
    } catch (error) {
        console.error( data );
        throw new Error("Not a vaild HAR file.");
    }
    // console.log("OK: " + filename);
    render_har(parsed_json);
};
