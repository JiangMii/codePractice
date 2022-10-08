// let currying = function (fn) {
//     // args保存需要复用的参数
//     let reuseArgs = Array.prototype.slice.call(arguments, 1)
//     // 定义一个保存复用参数和自身参数的数组
//     let args = reuseArgs
//     return function () {
//       // arguments是自身参数
//       if (arguments.length === 0) {
//         return fn.apply(null, args)
//       } else {
//         [].push.apply(args, arguments)
//       }
//     }
//   }
// function curry(fn) {
//   return function curryInner(...args) {
//     console.log(...args)
//     if (args.length >= fn.length) {
//       console.log(args.length , fn.length)
//       return fn(...args);
//     }
//     return (...args2) => curryInner(...args, ...args2);
//   };
// }
// function add(a, b) {
//     return a + b;
// }
// let now = curry(add)
// console.log(now(1)(7,0))
// console.log(now(1)(2)(3))

// let nums = [-1, 2, 1, -4], target = 1;
// let sum = []
// for (let i = 0; i < nums.length; i++){
//     for (let j = i + 1; j < nums.length; j++){
//         for (let n = j + 1; n < nums.length; n++){
//             let now = nums[i] + nums[j] + nums[n];
//             sum.push(Math.abs(now - target));
//         }
//     }
// }
// console.log(Math.min(...sum)+target);


// console.log(1 == 2 == 0)
// let a=10,b=12; 
// a=b-a; //a=2;b=12 
// b=b-a; //a=2;b=10 
// a = b + a; //a=12;b=10 
// console.log(a, b)
// new Promise(resolve => {
//     console.log(1);
//     resolve();
//   }).then(() => setTimeout(() => console.log(2), 1))
//     .finally(() => console.log(4));
  
//   const timer = setTimeout(() => console.log(3), 1); 
  
//   // 1 4 3 2

  function promise1 () {
    let p = new Promise((resolve) => {
      console.log('promise1');
      resolve('1')
    })
    return p;
  }
  function promise2 () {
    return new Promise((resolve, reject) => {
      reject('error')
    })
  }
  promise1()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally1'))
  
  promise2()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally2'))