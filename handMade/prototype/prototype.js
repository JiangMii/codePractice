// function Person(name) {
//     this.name = name;
    
// }
// Person.prototype.getName=function(){}
// var p = new Person('hello')
// console.log(p.__proto__ == Person.prototype)
// console.log(p.__proto__ == p.constructor.prototype)
// Person.prototype = {
//     function () { }
// }
// var p = new Person('hello')
// console.log(p.__proto__ == Person.prototype)
// console.log(p.__proto__ == p.constructor.prototype)
// console.log(p.constructor)

// for (var i = 0; i < 5; i++){
//     (function (j) {
//         setTimeout(() => {
//             console.log(j)
//         },j*100)
//     })(i);

// }

// function first() {
//     console.log('1')
//     second();
//     console.log('3')
// }
// function second() {
//     console.log('2')
// }
// first();

// 求和函数 sum(1, 2)(3, 4)(5).sumOf()。