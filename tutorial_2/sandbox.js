// // //    << Asynchronous JavaScript Tutorials >>   // // //
console.log("Hi!");

// ----------------------------------------------------------------------
// // HTTP REquests 

const request = new XMLHttpRequest();

// XMLHttpRequest.readyState:
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();

// ----------------------------------------------------------------------
