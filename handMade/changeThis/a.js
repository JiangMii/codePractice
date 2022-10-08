// // let arr=read_line().split(' ').map(i=>{return parseInt(i)});
// let arr=[3,3,2]
// let n=arr[0],m=arr[1],want=arr[2];
// let res = [];
// let arr1=[[90,90,90],[80,100,90],[80,85,85]]
// for(let i=0;i<n;i++){
//  // let now=read_line().split(' ').map(i=>{return parseInt(i)}).reduce((pre,cur)=>{return pre+cur});
//  let now=arr1[i].reduce((pre,cur)=>{return pre+cur});
//  let nowArr=[i+1,now];
//   res.push(nowArr);
// }
// res.sort((a, b) => { return b[1] - a[1] });
// console.log(res)
// for(let j=0;j<res.length;j++){
//   if(res[j][0]===want){
//     console.log(j+1);
//   }
// }

//let arr=read_line().split(' ').map(i=>{return parseInt(i)});
// let arr=[3,3]
// let n=arr[0],k=arr[1];
// //let arr1=read_line().split(' ').map(i=>{return parseInt(i)});
// let arr1 = [3, 2, 1], l = 3;
// let res=0;
// arr1 = Array.from(new Set(arr1))

// for(let i=0;i<l;i++){
//   for(let j=i+1;j<l;j++){
//       let now=arr1[i]*arr1[j]
//     if(now>=k){
//       res=res+2;
//     }
//   }
// }
// console.log(res);

// function mySqrt(n) {
//   if (n < 0) { return NaN }
//   if (isNaN(n)) { return n }
//   if (n < 1) { return 0 }
//   let res = 1;
//   for (let i = 1; i < n; i++){
//     let now=i*i;
//     if (now === n) {
//       res = i;
//       break;
//     } else if (now > n) {
//       res = i - 1;
//       break;
//     }
//   }
//   return res;
// }

// function mySqrt(x) {
//   if (x < 0 || isNaN(x) || typeof x !== 'number') return NaN;
//   let left = 0, right = x;
//   let res = 0;
//   while (left <= right) {
//     let mid = Math.floor(left + ((right-left) / 2));
//     let sque = mid * mid;
//     if (sque === x) {
//       return mid;
//     } else if(sque>x){
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//       res = Math.max(res, mid);
//     }
//   }
//   return res;
// }
// console.log(mySqrt(1))
// console.log(mySqrt(2))
// console.log(mySqrt(4))
// console.log(mySqrt(100))
// console.log(mySqrt(1000))
// console.log(mySqrt(100000))



// class classA{
//     constructor(){
//         this.a = 'hello'
//     }
// }
// classA.prototype.a = 'world'

// const obj = new classA()
// obj.a = 'x'
// console.log(obj.a)
// delete obj.a
// console.log(obj) // world

// delete obj.a
// console.log(obj.a) // world
// obj.a = undefined
// console.log(obj.a) //undefined



let obj = { a: 1, b: 2 }

delete obj['a']
console.log('a' in obj && obj.a==undefined)

delete obj.b
console.log('b' in obj  && obj.b==undefined)

console.log(obj.c)