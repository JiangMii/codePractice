// function count(start, end) {
//     console.log(start)
//     let timer = setInterval(() => {
//         if (start < end) {
//             console.log(++start)
//         } else {
//             clearInterval(timer)
//         }
       
//     }, 100)
//     return {
        
//         cancel: function () {
//             clearInterval(timer)
//         }
//     }
// }
// count(1,5)

// let a = new Map();
// a.set(2, 'mi')
// a.set(3, 'li')
// a.set(4, 'er');
// console.log(a.keys().next());
// let a = '11' * 3;
// let b = 'a8' * 3;
// let c = '8a' * 3;
// let d = parseFloat('8a');
// console.log(a,b,c,d)
// var a = Object.prototype.toString;
// console.log(a.call(2))
// console.log(a.call('s'))
// console.log(a.call(true))
// console.log(a.call([]))
// console.log(a.call(function () { }))
// console.log(a.call({}))
// console.log(a.call(undefined))
// console.log(a.call(null))
// function find(arr) {
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[j] == arr[i]) {
//                 arr.splice(j,1)
//             }
//         }
//     }
//     return arr;
// }
// console.log(find([1,2,3,4,1,3,5,6]))

// var num = 0;
// var obj = {
//     fun: function () {
//         console.log(this);
//         return function () {
//             console.log(this);
//         }
//     }
// }
// obj.fun();
// let a = obj.fun;
// a();

// let l=parseInt(read_line());
// let arr=read_line().split(' ').map(i=>parseInt(i));
// let l = 5;
// let arr=[5,3,1,2,4]
// let res=[];
// res.push(arr.indexOf(1)+1)
// for(let i=2;i<=l;i++){
//   let now=arr.indexOf(i);
//   if(now>res[res.length-1]-1){
//     res.push(now+1);
//   }else{
//     res.push(res[res.length-1]);
//   }
// }



// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()));

// console.log(null==0,null===0)

// var str='abbbcd'
// let res = 0;
// if(str.length<=1)console.log(str.length);
// for(let i=0;i<str.length-1;i++){
//   if(str[i]!=str[i+1]){
//     res++;
//   }
// }
// console.log(res + 1);

// var find = function (str) {
//     const l = str.length
//     const dp = new Array(n);
//     for (let i = 0; i < l; i++){
//         dp[i] = new Array(l).fill(0);
//     }
//     for (let i = l - 1; i >= 0; i--){
//         dp[i][i] = 1;
//         for (let j = i + 1; j < l; j++){
//             if (str[i] === str[j]) {
//                 dp[i][j] = dp[i][j - 1];
//             } else {
//                 let min = Infinity;
//                 for (let m = i; m < j; m++){
//                     min = Math.min(min, dp[i][m] + dp[m + 1][j]);
//                 }
//                 dp[i][j] = min;
//             }
//         }
//     }
//     return dp[0][l - 1];
// }


// var arr = [1, 2, [7, [6,9],8], 0, 5]

// function flat(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] instanceof Array) {
//             res.push(...flat(arr[i]))
//         } else {
//             res.push(arr[i])
//         }
//     }
//     return res;
// }
//  console.log(flat(arr))


// async function f() {
//     try {
//         let a = await Promise.reject('err')
//         console.log('222')
//     } catch (e) {
//         console.log(e)
//     }
// }
// f();

// var obj = { name: 'mi' };
// function f(obj) {
//     obj.name='oo'
// }
// f(obj)
// console.log(obj)


// var obj1 = { name: 'mi' };
// function f1(obj) {
//     obj = 1
//     console.log('obj参数',obj)
//     return obj;
// }
// f1(obj1)
// console.log(obj1)

// function find() {
//     throw Error('22')
// }

// async function fn() {
//     console.log(1)
//     await find();
//     console.log(end)
// }
// fn()


// var n=-1,tokens;

// if (n < 0) {
//        n = parseInt(line.trim())
//    } else{
//          tokens = line.split(' ').map(i=>parseInt(i))
//    }
// let n = 5;
// let tokens=[1, 7, 13, 19, 22]
// let i = 0, j = i + 1;
// let res = 0;
// while(tokens.length){
//     if(i==tokens.length-1)break;
//     let str = (tokens[i] + tokens[j]).toString();
//     console.log(str)
//     if(str[str.length-1]==0){
//         tokens.splice(i, 2)
//         res = res + 2;
//     }else{
//         i++;
//         j = i + 1;
//     }
//     console.log(tokens)
// }
// console.log(res)



// if((line[0]=='a'||line[0]=='e'||line[0]=='i'||line[0]=='o'||line[0]=='u')&&(line[2]=='a'||line[2]=='e'||line[2]=='i'||line[2]=='o'||line[2]=='u')&&(line[1]!='a'||line[1]!='e'||line[1]!='i'||line[1]!='o'||line[1]!='u')){
//     console.log('Yes')
//     }else{
//         console.log('No')
//     }
// let arr=read_line().split(' ').map(i=>parseInt(i));
// let x=arr[4],res=[]
// for(let i=0;i<4;i++){
//   let now=read_line().split(' ').map(i=>parseInt(i));
//   res.push(now);
// }
// let x = 2;
// let res=[[4],[7,7],[6,6],[8]]
// let myArr=new Array(4).fill(0)
//  for(let i=0;i<res.length;i++){
//    res[i].map(item=>{
//        if (item > x) {
//          console.log(item)
//        myArr[i]++
//      }
//    })
//  }
// console.log(myArr);
// let arr = [5, 3, 4, 2, 1], res = [arr[0]], now = 0;
// let flag=true,k=2
// for (let i = 1; i < arr.length; i++){

//     if (arr[i] <= arr[now]) {
//       res.push(arr[i]);
//       now=i;
//       i=now;
//     }
// }
//   for(let i=1;i<res.length;i++){
//     if(res[i]-res[i-1]>k){
//       flag=false;
//     }
//   }
// console.log(flag, res)
// console.log(res[res.length-1]==arr[arr.length-1])
// let m = 2;
// let arr = [4, 8, 9, 10, 7, 6, 5, 3, 2, 1];
// let arr1 = Array.from(arr)
// let arA=[],arB=[];
// let ji = 1;
// let res = '';
// while (arr.length>0) {
//     let max=Math.max(...arr);
//     let ind=arr.indexOf(max);
//   let left = ind - 0 > m ? ind - m : 0;
//   let right = arr.length - 1 - ind > m ? ind + m : arr.length - 1;
//   if (ji % 2 == 0) {
//      arB.push(...arr.splice(left, right - left + 1))
//   } else {
//     arA.push(...arr.splice(left, right - left + 1))
//   }
//   ji++;
// }





// for (let i = 0; i < arr1.length; i++){
//   let now = arr1[i];
//   if (arA.indexOf(now) != -1) {
//     res=res+'A'
//   } else {
//     res=res+'B'
//   }
// }
// console.log(res)

// let arr = [1, 2, 3, [5, 6, 8], [8,9, 9]]
// let newArr = arr.flat(Infinity);
// let map = new Map();
// for (let i = 0; i < newArr.length; i++){
//   if (map.get(newArr[i])) {
//     map.set(newArr[i], map.get(newArr[i])+1)
//   } else {
//     map.set(newArr[i], 1);
//   }
// }
// console.log(Array.from(map).sort((a,b)=>{return b[1]-a[1]} ))
// let obj = {
//   name: 1,
//   age:2
// }
// console.log(Reflect.ownKeys(obj))



// var subarraySum = function (nums, k) {
//   let sum = 0,
//       ans = 0;
//   let map = new Map();
//   map.set(0, 1);
//   for (let num of nums) {
//       sum += num;
//       if (map.has(sum - k)) {
//           ans += map.get(sum - k);
//       }
//       if (map.has(sum)) {
//           map.set(sum, map.get(sum) + 1);
//       }else {
//           map.set(sum, 1);
//       }
//   }
//   return ans;
// };

// console.log(subarraySum([1,2,3,1,1,3,2,1],3))\


// var subarraySum = function (nums, k) {
//   let map = new Map();
//   map.set(0, 1)
//   let count = 0, sum = 0;
//   for (let i = 0; i < nums.length; i++){
//     sum = sum + nums[i];
//     let lest = sum - k;
//     if (map.get(lest)) {
//       count=count+map.get(lest)
//     }
//     map.set(sum,(map.get(sum)||0)+1)
//   }
//   return count
//  }
// console.log(subarraySum([1,2,3,1,1,3,2,1],3))

// var find = function (arr) {
//   let map = new Map();
//   arr.forEach((item) => {
//     map.set(item, ((map.get(item)) || 0) + 1);
//   })
 
//   let res = map.entries()
//   //   ().map(item => {
//   //    return item[1]
//   // })
// console.log(res)
//   let set = new Set(res)
//   console.log(res.length===set.size)
  
// }
//find([1, 2, 3, 1, 1, 3, 2, 1])


// function web(arr) {
//     for (var i = 0,hash=[],arr1=[]; i < arr.length; i++) {
//       if(hash[arr[i]]===undefined) {
//         arr1[arr1.length] = arr[i];
//         console.log(arr1)
//         hash[arr[i]] = '';
//         console.log(hash);
//       } else {
//         console.log(arr[i],'多次')
//       }
//     }
//     return arr1;
// }
// console.log(web([1, 2, 3,2,3]));




// let p = new Promise((res, rej) => {
//   console.log(1)
//   res(1)
// }).then(() => {
//   throw Error('2');
// }).catch((e) => {
//   console.log(3)
// }).then(() => {
//   console.log(4)
// })


// function fn() {
//   return new Promise((res,rej) => {
//     console.log(4);
//     throw Error(2)
//     console.log(5)
//   })
// }
// async function a() {
//   console.log(1)
//   await fn();
//   console.log(3)
// }
// a()

// let arr = [20, 10, 5, 3];
// let a=Math.floor(arr[0]/arr[1]),b=Math.floor(arr[0]/arr[2]),c=Math.floor(arr[0]/arr[3])
// console.log(a, b, c)
// let count = 0;
// for (let i = 0; i <= a; i++){
//   for (let j = 0; j <= b; j++){
//     for (let n = 0; n <= c; n++){
//       let now = arr[1] * i + arr[2] * j + arr[3] * n;
//       if (now <= arr[0]) {
//         count++;
//       }
//     }
//   }
// }
// console.log(count)


// const push = Array.prototype.push;
// const pop = Array.prototype.pop;
// const shift = Array.prototype.shift;

// Array.prototype.push=function(...pramas){
//     //const res=push.call(this,...pramas);
//     console.log('hello push');
//     return push.call(this,...pramas);
// }

// Array.prototype.pop=function(...pramas){
//     const res=pop.call(this, ...pramas);
//     console.log('hello pop');
//     return res;
// }

// Array.prototype.shift=function(...pramas){
//     const res=shift.call(this, ...pramas);
//     console.log('hello shift');
//     return res;
// }

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
const methodToPatch = ['push', 'pop', 'shift'];
methodToPatch.forEach(method => {
    //console.log(1)
    Object.defineProperty(arrayMethods, method, {
        value: function (...args) {
            console.log('hello ' + method)
            return arrayProto[method].apply(this, args);
        },
        configurable: true,
        writable: true,
        enumerable: true
    })
});
Array.prototype = arrayMethods;
Object.setPrototypeOf(Array, arrayMethods)
console.log(Array.prototype)

let arr = [1, 2, 3, 4]
let l = arr.push(0);
console.log(arr,l);