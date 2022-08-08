//方法一：递归
var deepClone=function(obj){
    let newObj=null;
    if(typeof(obj)===Object && obj!==null){
        newObj=obj instanceof Array?[]:{};
        for(let i in obj){
            newObj[i]=deepClone(obj[i]);
        }
    }else{
        newObj=obj;
    }
return newObj;
}
//方法二：Json内置
var deepClone=function(obj){
    return JSON.parse(JSON.stringify(obj))
}
console.log(deepClone([1,4,[4,5,[0],6],5,7]));