class dingYue{
    constructor() {
        this.callbackMap = {}
    }

    subscribe(eventName, callback) {
        if (this.callbackMap[eventName]) {
            this.callbackMap[eventName].push(callback);
        } else {
            this.callbackMap[eventName] = [callback];
        }
    }
    unSubscribe(eventName, callback) {
        const ind = this.callbackMap[eventName].indexOf(callback);
        this.callbackMap[eventName].splice(ind, 1);
    }
    Public(eventName) {
        for (let i = 0; i < this.callbackMap[eventName].length; i++){
            const now = this.callbackMap[eventName][i];
            now();
        }
    }
}
// const a = new dingYue();
// const fn1 = () => { console.log(1) }
// const fn2 = () => { console.log(2) }
// const fn3=()=>{console.log(3)}
// a.subscribe('sb', fn1)
// a.subscribe('sb', fn2)
// a.subscribe('sb', fn3)
// a.unSubscribe('sb', fn2)
// a.Public('sb')
// console.log(a)
// console.log(Object.prototype)

// function sum(num) {
//     const func = (...args) => {
//       return args.length > 0 ? sum(num + args.reduce((acc, val) =>
//         acc += val
//         , 0)) : num;
//     }
//     // overriding valueOf allows us to assign a value to func when it is type coerced
//     // i.e if we are comparing func to a value, we create a function that returns what type
//     // of value it returns to. Here we want to return the value of num
//     func.valueOf = () => num;
//     return func
// }
//   console.log(sum(1)(2)(3)==6)

