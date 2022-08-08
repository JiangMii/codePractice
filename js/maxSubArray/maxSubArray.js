var maxSubArray = function(nums) {
    let max=nums[0];
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum>0?sum=sum+nums[i]:sum=nums[i];//重在判断当前和的正负
        max=Math.max(max,sum)//始终获取最大值
    }
    return max;
    };

   console.log( maxSubArray([3,2,1,0,-3,-9,23,4,-1,-3]))