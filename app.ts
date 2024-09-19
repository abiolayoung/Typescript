// const button = document.querySelector('button')!;

// button?.addEventListener('click', () => {
//     console.log('Clicked!');
// })

// function add(n1:number, n2:number){
//     return n1 + n2;
//    }

// const res = add(-2, -8)
// console.log(res)

// arrow function

// const add = (a: number, b: number = 1) => a + b;
// // const printOutput = (output: string | number) => console.log(output); // or we declare the type in the expression
// const printOutput: (a: number | string) => void = output => console.log(output);
// printOutput(add(5))

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', (event) => console.log(event))
}

// the code above shows us passing a default parameter this allows us pass in only 1 argument
// default argument can only be passed to the last parameter of the argument

// ARRAYS and SPREAD

const hobbies = ['sleeping', 'cooking'];
const activeHobbies = ['Eating'];

activeHobbies.push(...hobbies); //the spread operator spreads out the array and add it to the variable (activeHobbies)
console.log(activeHobbies); 

const person = {
    name: 'Abeeb Adeniyi',
    age: '24',
    degree: 'Bachelors Degree',
    occupation: 'Software Developer'
}

const copiedPerson = { ...person }
console.log(copiedPerson)

// REST OPERATOR
//  the rest operator is used to passed in multiple argument or parameters to our function

const add = (...numbers: number[]) => {
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(3, 5, 7, 3);
console.log(addedNumbers)

// ARRAYS AND OBJECT DESTRUCTURING

// const hobby1 = hobbies[0];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);