// var obj = {
//     a: 2,
//     b() {
//         console.log(this.a)
//     }
// }
// var fn = obj.b
// obj.b();
// fn();
// console.log(fn()===obj.b())

// var longestCommonPrefix = function(strs) {
//     let res;
//     for(let i=0;i<strs[0].length;i++){
//         let now=strs[0].slice(0,i+1)
//         let f=strs.every(item=>{
//             return item.slice(0,i+1)==now;
//         })
//         if(f==false){
//             res=strs[0].slice(0,i)
//         }
//     }
//     return res;
// };
// let a = longestCommonPrefix(strs = ["flower", "flow", "flight"])
//  console.log(a)

function find(arr, n) {
    for (let i = 0; i < n; i++){
        let now = i;
        if (arr.indexOf(now) == -1) {
            console.log(i);
        }
    }
}