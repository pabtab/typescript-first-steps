var userInput; //Better than any
var username;
userInput = 5;
userInput = 'somee';
//username = userInput //error
if (typeof userInput === 'string') {
    username = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
var result = generateError('Error occurred', 500);
console.log(result);
