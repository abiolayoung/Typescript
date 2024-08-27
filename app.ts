function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number): void { //this void means the function doesnt have a return type
    console.log('Result: '+ num);
}

printResult(add(5,12))

let combineValues: (a: number, b: number) => number; // this function type makes it clear that whatever we store has to be a function
combineValues = add;
// combineValues = printResult;
console.log(combineValues(10, 2));