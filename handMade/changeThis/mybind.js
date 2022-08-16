Function.prototype.MyBind = function(obj, ...args1) {
    let fn = this
    obj = obj ? obj : window;
    return function (...args2) {
        console.log('atgs2',args2)
        obj.fn = fn;
      let args = [...args1, ...args2]
      let result = obj.fn(...args)
        delete obj.fn;
        return result;
    }
}

// function add(a, b, c) {
//     console.log(this.age)
//     console.log(Math.max(...arguments))
// }

// let obj = {
//     name: 'mi',
//     age:90
// }
// let b = add.MyBind(obj, 1, 2, 3, 4)
// b(5,6,7)