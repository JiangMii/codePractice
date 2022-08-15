// Function.prototype.myCall = function(context) {
//     context = context || window;
//     context.fn = this;
//     const args = [...arguments].slice(1)
//     const result = context.fn(...args)
//     delete context.fn
//     return result
// }

function fn(a, b) {
    console.log(this.first)
    console.log(Math.max(...arguments));
}
let obj = {
    first:8
}
let now = fn.bind(obj, 1, 2)
now(3,4)