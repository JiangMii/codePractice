Array.prototype._map = function (fn) {
    if (typeof fn !== 'function') {
        throw Error('参数必须是函数');
    }
    const res = [];
    for (let i = 0, l = this.length; i < l; i++){
        res.push(fn(this[i]))
    }
    return res;
}
let arr=[1,2,3]
let b=arr._map((c)=>{
    return c * 2;
})
console.log(b)