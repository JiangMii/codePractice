// var twoSum = function(nums, target) {
//     nums=nums.sort(function(a,b){return a-b});
//     let left=0,right=nums.length-1;
//     let res=[];
//     while(left<right-1){
//         if((nums[left]+nums[right])>target){
//             right--
//         }else if((nums[left]+nums[right])<target){
//             left++
//         }else{
//             res.push(left,right)
//             break
//         }
//     }
//     console.log(res)
//     return res;
//     };
var twoSum = function(nums, target) {
    let res=[];
for(let i=0;i<nums.length;i++){
  let now=nums[i];
  if(nums.indexOf(target-now)!==-1 ){
      res.push([i,nums.indexOf(target-now)])
  }
}
console.log(res[0])
return res[0];
};
    twoSum(nums = [2,14,11,15,6], target = 20)