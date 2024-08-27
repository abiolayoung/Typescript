// function combine(input1: number, input2: number){
//         const res = input1 + input2;
//         return res;
// }

// const combineAges = combine(30, 24);
// console.log(combineAges);

// UNION TYPE

// function combine(input1: number | string, input2: number | string){
//     let res;
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         res = input1 + input2;
//     }else{
//         res = input1.toString() + input2.toString();
//     }
//     return res;
// }

// const combineAges = combine(30, 24);
// console.log(combineAges);

// const combineNames = combine('max', 'abiola')
// console.log(combineNames)

// Literal Type

// type alliases used to recall and re-use a union type by declaring it in a variable
type Combinable = number | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: string
) {
  let res;
  if (typeof input1 === "number" && typeof input2 === "number") {
    res = input1 + input2;
  } else {
    res = input1.toString() + input2.toString();
  }
  if(resultConversion === 'as-number'){
    return +res;
  }{
    return res.toString();
  }
}

const combineAges = combine(30, 24, "as-number");
console.log(combineAges);

const combineNames = combine("max", "abiola", "as-text");
console.log(combineNames);

const combineStringAges = combine("30", "24", "as-number");
console.log(combineStringAges);
