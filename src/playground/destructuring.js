// const person = {
//     name: 'Elizabeth',
//     age: 55,
//     location: {
//         city: 'Princeton',
//         temp: 54
//     }
// };

// const { name = 'Anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'OFFS',
//     author: 'Me Of Course',
//     publisher: {
//         name: 'God'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = [ '100 Beaman Road', 'Princeton', 'MA', '01541' ];

const [ , city, state = 'New York' ] = address;

console.log(`You are in ${city} ${state}`);

const item = [ 'Coffee (iced)', '$2.00', '$2.40', '$2.75' ]

const [ menuItem, , medPrice ] = item

console.log(`A medium ${menuItem} costs ${medPrice}`);