/**
 * Write the necessary Node script to make this code work for 
 * all arrays: [1,2,3,4,5,6,7,8].even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd(); 
 * // [1,3,5,7] Test your code in Node.JS CLI
 */


let arr = [1,2,3,4,5,6,7,8];

function even(array){
    let newArr = []; 
    for (let i = 0; i<array.length; i++){
        if(array[i]%2==0){
            newArr.push(array[i])
        }
    }
    return console.log(newArr);
}


function odd(array){
    let newArr = []; 
    for (let i = 0; i<array.length; i++){
        if(array[i]%2!=0){
            newArr.push(array[i])
        }
    }
    return console.log(newArr);
}

module.exports = {
    even,
    odd,
    arr
}

// console.log(even(arr));
// console.log(odd(arr));
