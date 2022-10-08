let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let res = [];
let l = 0, r = arr[0].length - 1;
let t = 0, b = arr.length-1;
while (true) {
    for (let i = l; i <= r; i++){
        res.push(arr[t][i])
    }
    if (++t > b) break;
    for (let i = t; i <=b; i++){
        res.push(arr[i][r])
    }
    if (--r < l) break;
    for (let i = r; i >= l; i--){
        res.push(arr[b][i])
    }
    if (--b < t) break;
    for (let i = b; i >= t; i--){
        res.push(arr[i][l])
    }
    if (++l > r) break;
}
console.log(res);