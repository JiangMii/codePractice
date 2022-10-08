// var sortArray = function(nums) {
//     if(nums.length<2)return nums;
//     let left=[],right=[];
//     let now=nums[0];
//     for(let i=1;i<nums.length;i++){
//         if(nums[i]>=now){
//             right.push(nums[i])
//         }else{
//             left.push(nums[i])
//         }
//     }
//     return sortArray(left).concat([now],sortArray(right));//递归
//     };
//     console.log(sortArray([5,2,3,1,6,9]))

function find(arr,target){
    let res=new Set();
    for(let i=0;i<arr.length;i++){
        let now=arr[i];
        let less=target-now
        if(arr.indexOf(less)>-1 && arr.indexOf(less)!=i){
            res.add(i,arr.indexOf(less));
        }
    }
    return [...res]
}
console.log(find([2,7,11,15],9));