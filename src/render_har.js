module.exports = function(har)
{

    let files = har.log.entries;
    files.map( file =>
    {
        let response = file.response;
        let response_success = response.status === 200;
        let file_positison = file.request.url.split("/");
        let content = "";
        if( response_success )
        {
            content = response.content;
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
