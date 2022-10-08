function flat(arr, deep = 1) {
    let res = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i]) && deep) {
            res = res.concat(flat(arr[i], deep - 1))
        } else {
            res.push(arr[i])
        }
    }
    return res;
}
let arr = [1, 2, [3, 4], 7, [8, [9]]]
console.log(flat(arr, 9))