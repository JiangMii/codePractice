

 var subarraySum = function(nums, k) {
    let dic = {};//dic记录和出现的次数
    dic[0]=1;
    let sum=0;
    let count=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        
        if(dic[sum-k]){
            count += dic[sum - k];
            console.log(i)
        }
         if(dic[sum]){
            dic[sum]+=1;
        }else{
            dic[sum]=1;
        }
     }
   //  console.log(dic)
   // return count;
};
console.log(subarraySum([1,2,3],3))

