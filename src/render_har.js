const base64_decode = require("./base64_decode");
const write_files = require("./write_files");
const create_project = require("./create_project");

module.exports = function(har)
{
    let files = har.log.entries;
    let project_name = files[0].request.url.split("/")[2];
    create_project({ name:project_name, number:0 });
    files.map( file =>
    {
        let response = file.response;
        let response_success = response.status === 200;
        /**
         * Delete http(s)://www.example.com like:
         * ["http:", "", "www.example.com", ""] => ["www.example.com", ""]
         */
        let file_positison = file.request.url.split("/").slice(2);
        let content = {};
        /**
         * What type of this file is? Does this file encoded? The answers is MMIE.
         * @property {array} type - MMIT type info.
         * @property {boolean} should_encoded - Does this file encoded?
         */
        let mmie_info = { type:[], should_encoded: false };
        let content_text = "";
        
        if( response_success )
        {
            content = response.content;
            mmie_info = {
                type: content.mimeType.split(";")[0].split("/"),
                should_encoded: content.hasOwnProperty("encoding")
            };
            if( mmie_info.should_encoded )
            {
                if( content.encoding !== "base64" )
                {
                    console.error( content.encoding );
                    throw new Error( "No suitable decode type." );
                }
                content_text = base64_decode( content.text );
            }
            else
            {
                content_text = content.text;
            }
            write_files({ file_positison, mmie_info, content_text });
        }
        else
        {
            let warn_msg = `Warning: The file ${ file.request.url } is not vaild because HTTP code is ${ response.status }`;
            console.warn(warn_msg);
        }
    });
    
}
