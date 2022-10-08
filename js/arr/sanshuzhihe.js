var threeSum = function (nums) {
    nums = nums.sort((a, b) => { return a - b });
    console.log(nums)
    let res = []
    for (let i = 1; i < nums.length - 1; i++) {
        let left = 0, right = nums.length - 1;
       
        //console.log(now,left,i,right);
        while (left < i && i < right) {
            let now = nums[left] + nums[right] + nums[i];
            if (now < 0) {
                console.log('xiao',now,left,i,right)
                left++;
            } else if (now > 0) {
                console.log('da',now,left,i,right)
                right--;
            } else {
                console.log(now,left,i,right);
                res.push([nums[left], nums[i], nums[right]]);
                break;
            }
        }
    }
    return res;
};          

console.log(threeSum([0, 0, 0, 0]))
    console.log([0,0,0]===[0,0,0])