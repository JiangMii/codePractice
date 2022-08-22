let currying = function (fn) {
    // args保存需要复用的参数
    let reuseArgs = Array.prototype.slice.call(arguments, 1)
    // 定义一个保存复用参数和自身参数的数组
    let args = reuseArgs
    return function () {
      // arguments是自身参数
      if (arguments.length === 0) {
        return fn.apply(null, args)
      } else {
        [].push.apply(args, arguments)
      }
    }
  }
function add(a, b) {
    return a + b;
}
let now = currying(add)
console.log(now(1, 100, 90, 9))
// console.log(now(1)(2)(3))