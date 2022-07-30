// let a={name:'mimi'}
// function one(a,b){
//     console.log(a,b)
// }

// //Fun为构造函数, args表示传参
// function myNew(Fun, ...args) {
//     // 1.在内存中创建一个新对象
//     let obj = {};
    
//     // 2.把新对象的原型指针指向构造函数的原型属性
//     obj.__proto__ = Fun.prototype;
    
//     // 3.改变this指向，并且执行构造函数内部的代码（传参）
//     let res = Fun.apply(obj, args);
    
//     // 4.判断函数执行结果的类型
//     if (res instanceof Object) {
//         return res;
//     } else {
//         return obj;
//     }
// }

// let resu=myNew(one,2,9);
// console.log(resu);

// let arr=['one','two','three','one']
// function getMount(arr){
//     let res={};
//     for(let item of arr){
//         if(res[item]==undefined){
//             res[item]=1;
//         }else{
//             res[item]++;
//         }
//     }
//     return res;
// }
// console.log('res:',getMount(arr))

// var lengthOfLongestSubstring = function(s) {
//     let res=[];
//     let left=0,right=left;
//     while(right<s.length-1){
//         let now=s.slice(left,right+1);
//       //  console.log(now)
//         if(now.indexOf(s[right+1])==-1){
//             right++;
//         }else{
//             res.push(now.length);
//             left=left+1;
//             right=left;
//         }
//     }
//    // console.log(left,right)
//     res.push(right-left+1);
//     console.log(res)
//     return Math.max(...res);
//     };
//     lengthOfLongestSubstring('abcabcbb')
//     lengthOfLongestSubstring('bbbbb')
//     lengthOfLongestSubstring('pwwkew')

// var merge = function(nums1, m, nums2, n) {
//     let first=nums1.indexOf(0)-1;
//     let two=n-1;
//     while(first>0&&two>0){
//     for(let i=nums1.length-1;i>0;i--){
//         console.log(first,two)
//     if(nums1[first]>=nums2[two]){
//         nums1[i]=nums1[first];
//         first--;
//     }else{
//         nums1[i]=nums2[two];
//         two--;
//     }
//     }
// }
//     console.log(nums1)
//     return nums1;
//     };
// var merge = function(nums1, m, nums2, n) {
//     let len=m+n-1;
//     m=m-1;
//     n=n-1;
//     while(m>=0&&n>=0){
//         nums1[len]=nums1[m]>=nums2[n]?nums1[m--]:nums2[n--];
//         len--;
//     }
//     let least=m>n?nums1[m]:nums2[n];
//     nums1[len]=least;
//         console.log(nums1)
//   return nums1;
//         };
// merge(nums1 = [1], m = 1, nums2 = [], n = 0)
// merge(nums1 = [0], m = 0, nums2 = [1], n = 1)
// let res1=arr.forEach(function(item,index,arr){
//     arr[index]=item*10;
// })
// console.log(res1,arr)

// let arr=[1,2,2,3,4,4,5]
// let res2=arr.map(function(item,index,input){
//    return  item*10;
// })
// console.log(res2,arr)


// function test(){
// 	arr.forEach(item=> asyncEvent(item));
//   	console.log("finish!");
// }
// test();

// let arr=[1,2,3,4,5];
// function asyncEvent(ele){
//     return new Promise(resolve=>{
//     	setTimeout(e=>{
//       		console.log(e);
//       		resolve(e)
//     },1000,ele);
//   })
// }

