// var permute = function(nums) {
//     const res = [], path = []
//     const used = new Array(nums.length).fill(false)
//     const dfs = () => {
//         if (path.length == nums.length) {
//             res.push(path.slice())
//             return
//         }
//         for (let i = 0; i < nums.length; i++) {
//             if (used[i]) continue
//             path.push(nums[i])
//             used[i] = true
//             dfs()
//             // 回溯的过程中，将当前的节点从 path 中删除
//             console.log(i,res)
//             path.pop()
//             used[i] = false
//         }
//     }
//     dfs()
//     return res
// };
console.log(permute([1,2,3]))
permute([1,2,3])
function permute (nums) {
    let res = []
    perm(nums, 0, nums.length - 1, res)
    return res
  }
  function perm (arr, p, q, res) {
    if (p === q) {
      res.push([...arr])
    } else {
        for (let i = p; i <= q; i++) {
            swap(arr, i, p)
            perm(arr, p + 1, q, res)
            swap(arr, i, p)

      }
    }
  }
function swap(arr, p, q) {
      [arr[p],arr[q]]=[arr[q],arr[p]]
  }


// function helper(l, r, s) {
//     let max = '';
//     // 定义左右双指针
//     while(l>=0 && r< s.length && s[l] === s[r]) {
//         l--
//         r++
//     }
//     // 拿到回文字符， 注意 上面while满足条件后多执行了一次，所以需要l+1, r+1-1
//     const maxStr = s.slice(l + 1, r + 1 - 1);
//     // 取最大长度的回文字符
//     if (maxStr.length > max.length) max = maxStr
//     return max;
// }
// let str='abbaa'
// helper(0,5,str)

// /**
//  * @param {string} s
//  * @return {string}
//  */
//  var longestPalindrome = function(s) {
//     let max = ''
//     for(let i=0; i< s.length; i++) {
//         helper(i, i)
//         helper(i, i+1)
//     }
//     function helper(l, r) {
//         while(l>=0 && r< s.length && s[l] === s[r]) {
//             l--;
//             r++;
//         }
//         const maxStr = s.slice(l + 1, r + 1 - 1);
    
//         if (maxStr.length > max.length) max = maxStr
//     }
//     return max
// };

// console.log(longestPalindrome('abbadc'))
// let arr=['E_DB2C','DC']

// let res=0;
// let reg=/^[a-zA-Z]+$/;
// for(let i=0;i<2;i++){
//   let now=arr[i];
//   if(now.length<=10){
//     if(reg.test(now)==true){
//       res=res+1;
//     }
//   }
// }
// console.log(res);

// let l1 = 7, l2 = 3;
// let str1 = 'abcaacc', str2 = 'a*c';
// let lest = '';
// let arr = [];
// for (let i = 0; i < l1 - l2+1; i++){
//     arr.push(str1.slice(i,i+l2))
// }
// let iArr = [];
// for (let j = 0; j < str2.length; j++){
//     if (str2[j] == '*') {
//         iArr.push(j);
//     } else {
//         lest = lest + str2[j];
//     }
// }
// console.log(iArr,lest)
// for (let n = 0; n < arr.length; n++){
//     let now = '';
//     for (let m = 0; m < now.length;m++){
//         if (iArr.indexOf(m) == -1) {
//             now = now + arr[n][m];
//             console.log(now);
//         }
//     }
    

// }
// //console.log(arr)


// let n=5
// if(n==1){
//     console.log(1)
// }
// let first=0;
// for(let i=1;i<=n;i++){
//     let now=[];
//     for(let j=1;j<=n;j++){
//         now.push(++first);
//     }
//     console.log(now.join(' '))
// }

// let find=function(arr){
//     arr.sort(function(a,b){return a-b});
//         let max=0,res=0;
//     for(let i=0;i<arr.length;i++){
//         let now=arr[i];
//         if(now==arr[i-1]){i++}
//         let nowmax=arr.lastIndexOf(now)-arr.indexOf(now);
//         if(nowmax>max){
//             max=nowmax;
//             res=i;
//         }
//     }
//         return arr[res];
// }
//     console.log(find([1,112,2]))

