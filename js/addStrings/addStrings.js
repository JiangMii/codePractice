var addStrings = function(num1, num2) {
    let arr1=num1.split('').reverse();
    let arr2=num2.split('').reverse();
    let m=Math.max(arr1.length,arr2.length);
    let carry=0,self;
    let res=[];
    for(let i=0;i<m;i++){
        let one=arr1[i]?Number(arr1[i]):0;
        let two=arr2[i]?Number(arr2[i]):0;
    self=(one+two+carry)%10;
    carry=Math.floor((one+two+carry)/10);
    res.push(self);
    }
    if(carry>0){
        res.push(carry)
    }
    return res.reverse().join('');
    };
    console.log(addStrings('456','77'))
    console.log(addStrings('0','0'))