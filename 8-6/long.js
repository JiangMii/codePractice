var findLengthOfLCIS = function(nums) {
    let left=0,right=left;
    let res=[];
    while(right<nums.length){
        if(nums[right+1]>nums[right]){
            right++;
        }else{
            res.push(right-left+1);
            left=right+1;
            right=left;
    
        }
    }
    return Math.max(...res)
    };
    console.log(findLengthOfLCIS([2,2,2,2,2,2]))
    console.log( findLengthOfLCIS([1,3,5,4,7]))