// let userInput: unknown;

// userInput = 5;
// userInput = 'max';

// console.log(userInput)

// using unkown type with check

// let userInputs: unknown;
// let userName: string;

// userInputs = 5;
// userInputs = 'max';

// if(typeof userInputs === 'string'){
//     userName = userInputs;
// }

// console.log(userInput)

// Never type

// function generateError(message: string, code: number): never {
//     throw {message: message, errorCode: code};
// }
// let result = generateError('an error occured', 500)
// console.log(result) // this function never produces a value, it trows a never data type