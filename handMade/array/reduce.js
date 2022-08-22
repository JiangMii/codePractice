Array.prototype.myReduce = function (fn, initialValue) {
    const array = this//获取数组
    let pre = initialValue || array[0]
    const startIndex = initialValue ? 0 : 1
    for (let i = startIndex; i < array.length; i++) {
      const cur = array[i]
      pre = fn(pre, cur, i, array)
    }
  return pre;
}
let arr = [1, 2, 3, 4, 5]
console.log(arr.myReduce((p,c)=>{return p+c}))

