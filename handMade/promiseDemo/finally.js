Promise.prototype.finally = function (onSettled) {
    return this.then(data=>{ // then返回的也是一个Promise对象
        onSettled(); // 执行回调,但不传递数据
        return data; // 保证返回的Promise对象的数据一致
    },reason=>{
        onSettled();
        throw reason; // 保证返回的Promise对象的数据状态一致
    })
}
