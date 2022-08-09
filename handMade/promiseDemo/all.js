function all(arr){
    arr=Array.from(arr);//类数组对象=》数组
    return new Promise((res,rej)=>{
        arr.length || res([]);//长度为0，直接包裹[]
        let count=0;//计数---resolve个数
        const fulled=[];//存储返回数据，供Promise.all的成功回调使用
        for(let i=0;i<arr.length;i++){
            Promise.resolve(arr[i]).then(resolve=>{
                fulled[i]=resolve;
                if(++count===arr.length){
                    res(fulled);
                }
            }).catch(e=>rej(fulled));//发现一个失败，则返回第一个失败
        }
    })
}