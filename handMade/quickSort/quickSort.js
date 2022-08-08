var sortArray = function(nums) {
    if(nums.length<2)return nums;
    let left=[],right=[];
    let now=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]>=now){
            right.push(nums[i])
        }else{
            left.push(nums[i])
        }
    }
    return sortArray(left).concat([now],sortArray(right));//递归
    };
    console.log(sortArray([5,2,3,1,6,9]))