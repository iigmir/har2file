module.exports = function(input)
{   // From https://github.com/mathiasbynens/base64/blob/master/src/base64.js
    let TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let REGEX_SPACE_CHARACTERS = /<%= spaceCharacters %>/g;
    input = String(input).replace(REGEX_SPACE_CHARACTERS, "");
    let length = input.length;
    // http://whatwg.org/C#alphanumeric-ascii-characters
    let invalid_character = length % 4 == 1 || /[^+a-zA-Z0-9/]/.test(input);
    if (length % 4 == 0)
    {
        input = input.replace(/==?$/, "");
        length = input.length;
    }
    if (invalid_character)
    {
        throw new Error( "Invalid character: the string to be decoded is not correctly encoded." );
    }
    let bit_counter = 0;
    let bit_storage;
    let buffer;
    let can_divided_by_4;
    let output = "";
    let position = -1;
    while (++position < length)
    {
        can_divided_by_4 = Boolean( bit_counter % 4 );
        buffer = TABLE.indexOf(input.charAt(position));
        bit_storage = can_divided_by_4 ? bit_storage * 64 + buffer : buffer;
        // Unless this is the first of a group of 4 characters…
        if (bit_counter++ % 4)
        {   // …convert the first 8 bits to a single ASCII character.
            output += String.fromCharCode( 0xFF & bit_storage >> (-2 * bit_counter & 6) );
        }
    }
    return output;
};
