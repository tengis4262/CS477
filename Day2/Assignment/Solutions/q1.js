Array.prototype.even = function() {
    const result = this.filter(num => num % 2 == 0);
    console.log(result);
};

Array.prototype.odd = function() {
    const result = this.filter(num => num % 2 !== 0);
    console.log(result);
};

[1,2,3,4,5,6,7,8].even(); // [2,4,6,8]
[1,2,3,4,5,6,7,8].odd(); 


