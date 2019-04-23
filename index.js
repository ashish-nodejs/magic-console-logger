// console.log("\x1b[32m Success \x1b[0m", user);
// console.log("\x1b[31m Error \x1b[0m", "Error text on regular background");
// console.log("\x1b[34m Info \x1b[0m", "Info text on regular background");
'use strict';
module.exports = (msgType, msg) => {
    var msgTypeCode;
    switch (msgType.toLowerCase()) {
        case 'success':
            msgTypeCode = "\x1b[32m Success \x1b[0m";
            break;
        case 'info':
            msgTypeCode = "\x1b[34m Info \x1b[0m";
            break;
        case 'error':
            msgTypeCode = "\x1b[31m Error \x1b[0m";
            break;
        default:
            break;
    }
    console.log(msgTypeCode, msg);
    return true;
}