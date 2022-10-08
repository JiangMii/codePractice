
// const counter = createCounter()
// counter.count // 0, then it should increment
// counter.count // 1
// counter.count // 2
// counter.count = 100 // it cannot be altered
// counter.count // 3
// 题目一
function createCounter() {
    let count = 0;
    return {
        get count(){
            return ++count;
        }
    }
}
const counter = createCounter()
console.log(
    counter.count ,
    counter.count=100,
    counter.count
)





// 请实现返回调用次数的函数count()，并支持count.reset()用以重置。
// count() // 1
// count() // 2
// count() // 3
// count.reset()
// count() // 1
// count() // 2
// count() // 3