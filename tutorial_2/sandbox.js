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

// ----------------------------------------------------------------------
// // // ---- Callback Hell ----

const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

// Callback Hell - one callback inside another callback and so on...
getTodos('todos.json', (err, data) => { // for example we have three todos.json files - first - todos/luigi.json
    console.log(data); // todos only for Luigi
    getTodos('todos.json', (err, data) => { // - second - todos/mario.json
        console.log(data); // todos only for Mario
        getTodos('todos.json', (err, data) => { // - third - todos/shaun.json
            console.log(data); // todos only for Shaun
        });
    });
});