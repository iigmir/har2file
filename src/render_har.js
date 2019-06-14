const base64_decode = require("./base64_decode");

module.exports = function(har)
{

    let files = har.log.entries;
    files.map( file =>
    {
        let response = file.response;
        let response_success = response.status === 200;
        let file_positison = file.request.url.split("/");
        let content = {};
        let mime_type = [];
        let text = "";
        let should_encoded = false;
        let decoded_contect;
        if( response_success )
        {
            content = response.content;
            mime_type = content.mimeType.split(";")[0].split("/");
            should_encoded = content.hasOwnProperty("encoding");
            if( should_encoded )
            {
                if( content.encoding !== "base64" )
                {
                    console.error( content.encoding );
                    throw new Error( "No suitable decode type." );
                }
                text = base64_decode( content.text );
            }
            else
            {
                text = content.text;
            }
            debugger;
        }
        else
        {
            let warn_msg = `Warning: The file ${ file.request.url } is not vaild because HTTP code is ${ response.status }`;
            console.warn(warn_msg);
            debugger;
        }
    });
    
}
