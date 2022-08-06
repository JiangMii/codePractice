var largestNumber = function(nums) {
    nums.sort((a,b)=>{
        let stra=a.toString()+b.toString(),strb=b.toString()+a.toString();
        if(stra>strb){
            return -1
        }else{
            return 1
        }
    })
        return nums.join('')
        };
       console.log( largestNumber([3,30,34,5,9]))
    
    