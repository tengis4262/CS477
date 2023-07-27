/**
Explain why do we want sometimes to use setImmediate instead of using setTimeout?

We use setImmediate sometimes to priorotize execution of callbacks in the event loop
for faster performance



Explain the difference between process.nextTick and setImmediate?

setImmediate will execute on next iteration before any other I/O and timer callbacks , however 
process.nextTick has higher priority than setImmediate thus it will execute before any other callbacks

Name 10 global modules/methods available in Node environment.

Console
Timers
Buffer
Process
Module
File System 
Path
URL
Utilities
Events
Assertion
 */