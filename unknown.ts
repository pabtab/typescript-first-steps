let userInput: unknown; //Better than any
let username: string

userInput = 5;
userInput = 'somee'

//username = userInput //error

if (typeof userInput === 'string') {
  username = userInput
}

function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code
  }
}

const result = generateError('Error occurred', 500) // Never - return nothings

console.log(result)