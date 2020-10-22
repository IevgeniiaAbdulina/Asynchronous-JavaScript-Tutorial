// // //    << Asynchronous JavaScript Tutorials >>   // // //
console.log("Hi!");

// ----------------------------------------------------------------------
// // ---- HTTP Requests ----

const request = new XMLHttpRequest();

// XMLHttpRequest.readyState:
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    }

// ----------------------------------------------------------------------
    // // ---- Status Codes ----
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    } else if (request.readyState === 4) {
        console.log('could not fetch the data');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();

// ----------------------------------------------------------------------
