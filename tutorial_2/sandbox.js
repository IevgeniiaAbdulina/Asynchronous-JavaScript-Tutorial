// // //    << Asynchronous JavaScript Tutorials >>   // // //
console.log("Hi!");

// // ----------------------------------------------------------------------
// // // ---- HTTP Requests ----

// const request = new XMLHttpRequest();

// // XMLHttpRequest.readyState:
// // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if (request.readyState === 4) {
//         console.log(request.responseText);
//     }

// // ----------------------------------------------------------------------
//     // // ---- Status Codes ----
//     // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request, request.responseText);
//     } else if (request.readyState === 4) {
//         console.log('could not fetch the data');
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send();

// // ----------------------------------------------------------------------
//     // // ---- Callback Functions ----

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             // console.log(request, request.responseText);
//             callback(undefined, request.responseText);
//         } else if (request.readyState === 4) {
//             // console.log('could not fetch the data');
//             callback('could not fetch the data', undefined);
//         }
//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//     request.send();
// };

// console.log(1);
// console.log(2);

// getTodos((err, data) => {
//     console.log('callback fired');
//     // console.log(err, data);
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);

// // ----------------------------------------------------------------------
// // // // ---- Using JSON Data ----

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText); // pase string into a JS object
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             callback('could not fetch the data', undefined);
//         }
//     });

//     request.open('GET', 'todos.json');
//     request.send();
// };

// getTodos((err, data) => {
//     console.log('callback fired');
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// // ----------------------------------------------------------------------
// // // // ---- Callback Hell ----

// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4) {
//             callback('could not fetch the data', undefined);
//         }
//     });

//     request.open('GET', resource);
//     request.send();
// };

// // Callback Hell - one callback inside another callback and so on...
// getTodos('todos.json', (err, data) => { // for example we have three todos.json files - first - todos/luigi.json
//     console.log(data); // todos only for Luigi
//     getTodos('todos.json', (err, data) => { // - second - todos/mario.json
//         console.log(data); // todos only for Mario
//         getTodos('todos.json', (err, data) => { // - third - todos/shaun.json
//             console.log(data); // todos only for Shaun
//         });
//     });
// });

// // ----------------------------------------------------------------------
// // // // ---- Promises ----

// const getTodos = (resource, callback) => {

//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if (request.readyState === 4) {
//                 reject('error getting resource');
//             }
//         });

//         request.open('GET', resource);
//         request.send();
//     })
// };

// getTodos('todos.json')
//     .then(data => {
//         console.log('promise resolved:', data);
//     })
//     .catch(err => {
//         console.log('promise rejected:', err);
//     })


// // Promise example

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetching something
//         resolve('some data');
//         // reject('some error');
//     })
// }

// getSomething()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// // ----------------------------------------------------------------------
// // // // ---- Chaining Promises ----

// const getTodos = (resource, callback) => {

//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if (request.readyState === 4) {
//                 reject('error getting resource');
//             }
//         });

//         request.open('GET', resource);
//         request.send();
//     })
// };

// getTodos('todos.json') // for example here is json file for Luigi
//     .then(data => {
//         console.log('promise 1 resolved:', data);
//         return getTodos('todos.json'); // for example here is another json file for Mario
//     })
//     .then(data => {
//         console.log('promise 2 resolved:', data);
//         return getTodos('todos.json'); // for example here is another json file for Shaun
//     })
//     .then(data => {
//         console.log('promise 3 resolved:', data);
//     })
//     .catch(err => { // catching the any error in any requests, very reusable
//         console.log('promise rejected:', err);
//     });

// // ----------------------------------------------------------------------
// // // // ---- The Fetch API ----

// fetch('todos.json')
//     .then((response) => {
//         console.log('resolve', response);
//         return response.json(); // promise
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('rejected', err);
//     });

// ----------------------------------------------------------------------
// // // ---- Async & Await ----

const getTodos = async () => { // always returned a promise

    const response = await fetch('todos.json');
    const data = await response.json();
    return data;
};

// getTodos(); // returned a promise

console.log(1);
console.log(2);

getTodos() // not blocking code 
    .then(data => console.log('resolved:', data));

console.log(3);
console.log(4);
