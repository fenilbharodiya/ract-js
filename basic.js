"use strict"
document.addEventListener('DOMContentLoaded', function () {
    // console.log('after load content');
    // name()
    // name1()

    let demo = document.getElementById('demo');
    let h1Tag = document.createElement('h1')
    demo.append(h1Tag)
    console.log(demo);
    
});

// function name() {
//     console.log("Simple function");
// }
// let name1 = () => {
//     console.log("Arrow function");
// };
// console.log('first executed');

class Car {
    constructor(name, color = 'black') {
        this.name = name;
        this.color = color;
    }

    getCarName() {
        return 'the name of car is ' + this.name + ' and the color is ' + this.color;
    }
}

var carName = new Car('audi');
console.log(carName);
console.log(carName.name);
console.log(carName.getCarName());