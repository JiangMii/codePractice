function  handleBigNum(a,b){
    let l = Math.max(a.length, b.length);
    a = a.split('').reverse();
    b = b.split('').reverse();
    console.log(a,b)
    let carry = 0, res = [], now;
    for (let i = 0; i <l; i++){
        let aa = a[i] ? parseInt(a[i]) : 0, bb = b[i] ?  parseInt(b[i]) : 0;
        now = (aa + bb + carry) % 10;
        carry = Math.floor((aa + bb + carry) / 10);
        res.push(now);
    }
    return res.reverse().join('');

}
console.log(handleBigNum('236','2111'))