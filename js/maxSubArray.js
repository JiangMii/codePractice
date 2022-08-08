var maxSubArray = function(nums) {
let max=nums[0];
let sum=0;
for(let i=0;i<nums.length;i++){
    sum>0?sum=sum+nums[i]:sum=nums[i];
    max=Math.max(max,sum)
}
return max;
};
