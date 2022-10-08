// function once(func) {
//     // your code here
//     let map=new Map();
//     return function(...args){
//       if(map.get(func)){
//         return map.get(func)
//       }else{
//         let res=func.call(this,...args);
//         map.set(func,res)
//         return res;
//       }
//     }
// }


function once(fn) {
    let res = null;
    let isCalled = false;
    return function (...args) {
        if (!isCalled) {
            res = fn.call(this, ...args);
            isCalled = true;
        }
        return res;
    }
}
function fn(a) {
    return a;
}
function fn1(a) {
    return a+1;
}
const onced = once(fn);
const onced1 = once(fn1);
console.log(onced(1))
console.log(onced(2))
console.log(onced1(1))
console.log(onced1(2))
// 如果函数的返回值本来就是null或undefined 就会出错

