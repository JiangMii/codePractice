// var rob = function(nums) {
//     const dp = new Array(nums.length)
//     dp[0] = nums[0];
//     dp[1] = Math.max(nums[0],nums[1]);
//     if(nums.length == 1) return nums[0];
//     for (let i = 2; i < nums.length; i++) {
//          dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
//     }
//     console.log(dp)
//     // if(nums.length % 2 === 0){
//     //     return Math.max(...dp);
//     // }else{
//     //     let res = [dp[dp.length-2]];
//     //     if(dp[dp.length-1] > dp[dp.length-2]){
//     //         res.push(dp[dp.length-1]-Math.min(nums[0],nums[nums.length-1]));
//     //     }
//     //     return Math.max(...res);
//     // }
// };
// console.log(rob([2, 1, 1, 2]));










