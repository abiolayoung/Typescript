// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // this is a tuple data type
// } = {
//     name : 'abiola',
//     age: 24,
//     hobbies: ['sport', 'cooking', 'dancing', 'eating'],
//     role: [2, 'author']
// };

// person.role.push('admin');
// person.role[1] = 10;

// let favoriteActivities: any[];
// let person2 = {name: 'abiola'}
// favoriteActivities = ['sport', 1, person2]

// console.log(person)

// for (const hobby of person.hobbies){
//     // console.log(hobby.toUpperCase());
//    // console.log(hobby.map()); // error- hobbie is a string and not an array!!
// }

// nested object and types

// const product: {
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//         title: string;
//         description: string;
//     }
// } = {
//     id: 'groceries',
//     price: 100,
//     tags: ['great-offer', 'hot-and-new'],
//     details: {
//       title: 'Food items',
//       description: 'selling at affordable price'
//     }
// }

// console.log(product)
// using enum type

// const admin = 0;
// const read_only = 1;
// const author = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name : 'abiola',
    age: 24,
    hobbies: ['sport', 'cooking', 'dancing', 'eating'],
    role: Role.READ_ONLY
};

if (person.role === Role.ADMIN){
    console.log('is Admin....')
} else if(person.role === Role.AUTHOR){
    console.log('is author')
} else {
    console.log('is read_only.....')
}