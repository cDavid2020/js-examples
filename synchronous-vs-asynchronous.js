// SYNCHRONOUS VS ASYNCHRONOUS

//SYNCHRONOUS CODE = code that is executed line by line, step by step linear order, start now, finish now

//ASYNCHRONOUS CODE = code that is executed at a later time, not necessarily in order, start now, finish later and the rest of the program can carry on what it was doing

console.log("START");
setTimeout(() => console.log("This is asynchronous")5000;);

console.log("END");

