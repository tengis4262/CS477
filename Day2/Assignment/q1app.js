// let array = require('./q1')

// array.odd(test.arr);
// array.even(test.arr);


// Homework Solutiion
Array.prototype.even = function(){
    const res = this.filter(num=> num%2 ==0);
    console.log(res);
};

// const arr = [1,2,3,4,5,6,7,8]
// arr.even();
[1,2,3,4,5,6,7,8].even();

Array.prototype.odd = function(){
    const res = this.filter(num=> num%2 !=0)
    console.log(res)
};

[1,2,3,4,5,6,7,8].odd();




