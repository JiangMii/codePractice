// var reverse = function(x) {
// arr=Math.abs(x).toString().split('').reverse();

// if(arr[0]==0){
//     arr.shift();
//     var str=arr.join('');
//     console.log(str)
// }else{
//     var str=arr.join('');
//     console.log(str)
// }
//  if(str>=Math.pow(2,31)){
//      return 0
//  }
//  if(x<0){
//     // console.log('-'+str)
//      return '-'+str
//  }else{
//      //console.log(str)
//      return str
//  }

// };
// reverse(312900)


// var isValid = function(s) {
//     const L = {
//         "(": ")",
//         "[": "]",
//         "{": "}"
//       };
//       //if(!s) return false
// if(s.length%2==1 || !s)return false
// const arr=[]
// const len=s.length
// for(let i=0;i<len;i++){
//     const ch=s[i]
//     if(ch=='(' || ch=='[' || ch=='{'){
//      arr.push(L[ch])
//  console.log(L[ch])
//      console.log(arr)
//     }else{
//         if(!arr.length || arr.pop()!=ch){
//             return false;
//         }
//     }
// }
// console.log(!arr.length)

// return !arr.length;
// };
// isValid("()")



// var lengthOfLastWord = function(s) {
// s=s.trim();
// var num=s.lastIndexOf(' ')

// console.log(s.length-num-1)
// };

// lengthOfLastWord("Hello World")


// var mySqrt = function(x) {
//     var low=0,high=x,mid;
//     while(low<=high){
//         mid=Math.ceil((low+high)/2)
//         // console.log(lo,hi,mid,mid*mid)
//         if(mid*mid==x) return mid;
//         if(mid*mid<x){
//             low=mid+1
//         }else{
//             high=mid-1;
//         }
//     }
//     console.log(Math.floor(high))
// return Math.floor(high);
// };


// var mySqrt=function(x){
//     if(x==1||x==0) return x
//  if(x>1){
//      let low=1,high=x,mid
//      while (low<high) {
//          mid=Math.ceil((low+high)/2)
//          if(mid*mid==x) return mid
//          if(mid*mid<x){
//              low=mid+1
//          }else{
//              high=mid-1;
//          }
//      }

// }
// };
// mySqrt(8)




// for (var i = 0; i < 10; i++) {
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }


//     var containsNearbyDuplicate = function(nums, k) {
//  let arr=new Set()
//  for(let i=0;i<nums.length;i++){
//      if(arr.has(nums[i])){
//          let start=nums.lastIndexOf(nums[i],i-1)
//          console.log(start)
//          if(i-start<=k)return true
//      }
//      arr.add(nums[i])
//  }
// return false;
//     };


// var isIsomorphic = function(s, t) {
//     let sObj = {}, tObj = {};
//     for(let i = 0; i < s.length; i++) {
//         sObj[s[i]] = i ;
//         tObj[t[i]] = i ;
        
//         if(sObj[s[i]] !== tObj[t[i]]) {
//             console.log('false')
//             return false;
//         }
      
//     }
//    console.log(sObj)
//    console.log(tObj)
//     return true;
// };
    
// var isIsomorphic = function(s, t) {

//     for(let i = 0; i < s.length; i++) {
//         if(s.indexOf(s[i]) != t.indexOf(t[i])) console.log('f')
//     }
//     return true
// };

// isIsomorphic(s = "paper", t = "title")

// var isPowerOfTwo = function(n) {
   
   


//      if(n==1){
//         console.log('true')
//         return true
//     }else if(n<1){
//         console.log('false')
//         return false
//     }
//     n=n/2;


// };
// isPowerOfTwo(16)


// var isAnagram = function(s, t) {
// for(let i=0;i<s.length;i++){
    
// }

// };
// isAnagram( "anagram",  "nagaram")

    

 

 
