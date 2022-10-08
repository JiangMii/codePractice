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
console.log(deepClone([1, 4, [4, 5, [0], 6], 5, 7]));
//方法三：
function deepClone(obj) {
    let copy = Object.create(Object.getPrototypeOf(obj));
    let propertyNames = Object.getOwnPropertyNames(obj);
    propertyNames.forEach(function (items) {
        let item = Object.getOwnPropertyDescriptor(obj, items);
        Object.defineProperty(copy, items, item);

    });
    return copy;
}
let obj = {
    name:'lily',
    arr:[1,2,3],
    date: [new Date(1536627600000), new Date(1540047600000)],
    RegExp: new RegExp('\\w+'),
    job:undefined,
    obj2:{
        fun:function(){}
    }
};
let testObj = deepClone(obj);
testObj.name = '不知火舞';
console.log(obj);   //{ name: 'lily',
                    // arr: [ 1, 2, 3 ],
                    // date: [ 2018-09-11T01:00:00.000Z, 2018-10-20T15:00:00.000Z ],
                    // RegExp: /\w+/,
                    // job: undefined,
                    // obj2: { fun: [Function: fun] } }
console.log(testObj)   //{ name: '不知火舞',
                        // arr: [ 1, 2, 3 ],
                        // date: [ 2018-09-11T01:00:00.000Z, 2018-10-20T15:00:00.000Z ],
                        // RegExp: /\w+/,
                        // job: undefined,
                        // obj2: { fun: [Function: fun] } }
