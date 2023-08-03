class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    getInfo() {
        console.log(this.name + ' ' + this.age)
    }
}


const name = "Tengis";

// global.name = "TENGIS ERDENEBAATAR"

function getName(){
    console.log(name)
}

module.exports = getName();
