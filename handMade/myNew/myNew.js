

function myNew(fn, ...args) {
    //定义一个空对象，用于存放后面New出来的对象
    let obj = {};
    //将新对象的原型指向构造函数的prototype属性
    obj.__proto__ = fn.prototype;
    //讲构造函数的this指向新对象，并执行构造函数里的代码
    let res = fn.call(obj, ...args);
    //如果返回值是对象，则返回这个对象，否则，返回更改过this的obj
    return res instanceof Object ? res : obj;
}

let a = myNew(Array)
console.log(a)
//第四步是为了以下情况：
// function fn(a,b){
//     this.name = a;
//     this.age = b;
//     return {
//         name:1,
//         age:2
//     }
// }