// let n = 3;
// let arr=['13','203','24']
// for(let i=0;i<n;i++){
//     let now = arr[i].split('').map(i => parseInt(i))
//     let flag = true;
//     let ou;
//     for(let j=0;j<now.length;j++){
//         if(now[j]%2===0){
//             ou=now[j];
//             now.splice(j, 1);
//             flag = false;
//         }
//     }
//     if (flag === true) {
//         console.log(-1)
//     } else {
//         now.push(ou);
//         let n = 0;
//         while (now[0] === 0) {
//             [now[0],now[n++]]= [now[n++],now[0]]
//         }
//         console.log(parseInt(now.join('')));
//     }

// }


// let n = 3;
// let arr = ['13', '203', '24']
// for (let i = 0; i < n; i++){
//     let now = arr[i];
//     if (parseInt(now) % 2 === 0) { console.log(now); continue }
//     let flag = true, ous;
//     let nowarr = now.split('').map(i => parseInt(i));
//     for (let j = 0; j < nowarr.length; j++){
//         if (nowarr[j] % 2 === 0) {
//             ous=nowarr[j]
//             nowarr.splice(j, 1)
//             flag = false;
//             break;
//         }
//     }
//     if (flag === false) {
//         nowarr.push(ous);
//         if (nowarr[0] === 0) {
//             let first;
//             for (let n = 0; n < nowarr.length; n++){
//                 if (nowarr[n] != 0) {
//                     first = nowarr[n];
//                     nowarr.splice(n, 1);
//                 }
//             }
//             nowarr.unshift(first);
//         }
//         console.log(parseInt(nowarr.join('')))
//     } else {
//         console.log(-1)
//     }
// }
// for (let i = 0; i < 7; i++){
//     i % 2 === 0 && console.log(i);
// }


// let str = 'mimimi'
// str[4]='p'
// console.log(str)

// const tokens=['[','(',')','{']
// const arr=[];
// let res=[];
//     for(let i=0;i<tokens.length;i++){
//         if(tokens[i]==='(' || tokens[i]==='[' || tokens[i]==='{'){
//             arr.push(tokens[i]);
//         }else{
//             let now = arr.pop();
//             if(tokens[i]==')' && now!='('){
//                 res.push(now,i)
//                 console.log(now,i)
//                 break;
//             }
//             if(tokens[i]=='}'&&now!='{'){
//                 res.push(now, i)
//                 console.log(now,i)
//                  break;
//             }
//              if(tokens[i]==']'&&now!='['){
//                  res.push(now, i)
//                  console.log(now,i)
//                   break;
//             }
//         }
//     }
//console.log(res);


// function test(){
//     var a = 1;
//     return function(){
//         console.log('a',a++)
//     }
// }
// const fn = test();//用fn承接，三次fn()返回的是同一个a++函数;
// console.log(fn)
// fn();
// fn();
// fn();

// test()();//直接test()(),相当于每次返回的都是新的a++函数
// test()();//内存中的地址不一样，自己独立的作用域
// test()();
// console.log(test()===test());//这个就能证明了

// function deepClonePlus(obj, hash = new WeakMap()) {
//     if (obj == null) return obj;
//     if (obj instanceof Date) return new Date(obj);
//     if (obj instanceof RegExp) return new RegExp(obj);
//     if (obj instanceof Error) return new Error(obj.message)
//     if (typeof obj !== "object") return obj;
//     // 是对象的话就要进行深拷贝，hash判断是否已存在当前对象
//     if (hash.has(obj)) return hash.get(obj);

//     let cloneObj = new obj.constructor(); //新建空数组或空对象
//     // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身(构造函数)
//     hash.set(obj, cloneObj);
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             // 实现一个递归拷贝
//             cloneObj[key] = deepClonePlus(obj[key], hash);
//         }
//     }
//     return cloneObj;
// }
// let newObject = {
//     name: 'shuaige',
//     age: 12,
//     boo: true,
//     n: null,
//     un: undefined,
//     sy: Symbol('xx'),
//     child: {
//         ele: 'boby',
//         x: 100
//     },
//     arr: [1, 2, 3],
//     fn: function () {
//         console.log(this.name);
//     },
//     time: new Date()
// }
// newObject.loop = newObject;
// let newObjectClone = deepClonePlus(newObject)
// console.log(newObject);
// console.log(newObjectClone);
// newObject.name = 'mimi';
// console.log(newObject);
// console.log(newObjectClone);


// function getUrlParam(sUrl, sKey) {
//     let str = sUrl.slice(sUrl.indexOf('?')+1, sUrl.indexOf('#'));
    
//     let arr=str.split('&')

//     let obj={};
//     for(let i=0;i<arr.length;i++){
//         let now = arr[i].split('=');
//         let key = now[0], val = now[1];
       
//         if(obj[key]==undefined){
//             obj[key] = val
//         }else{
//             obj[key] = obj[key] + val.toString();
//         }
//     }
//     let flag = true, ind;
//     for (let item in obj) {
//         obj[item] = obj[item].split('')
//         if (obj[item].length > 1) { flag = false; ind = item };
//     }

//       if(sKey){return obj[sKey]?obj[sKey]:''}
//    // if (!sKey) { return obj ? obj : {} };
//     if(flag===false){return obj[ind]}
// }
// getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehekey')
//    console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehekey'))


// ([[])

let arr = ['(','[','[',']',')']
let myArr = [], res = 0;
for (let i = 0; i < arr.length; i++){
    if (arr[i] == '{') {
        myArr.push('}')
    } else if (arr[i] == '[') {
        myArr.push(']')
    } else if (arr[i] == '(') {
        myArr.push(')')
    } else {
        if (myArr[myArr.length-1]!= arr[i]) {
            if (myArr.indexOf(arr[i]) != -1) {
                myArr.splice(myArr.indexOf(arr[i]), 1);
            } else {
                res++;
            }
        } else {
            myArr.pop();
        }
    }
}
res = res + myArr.length;
if (myArr.length == 0 || myArr.length == arr.length) { console.log(arr.length) };
console.log(res);