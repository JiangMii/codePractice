//重新定义属性，监听起来
// function defineReactive(target,key,value){
//     observer(value)    //深度监听
//     Object.defineProperty(target,key,{
//         get(){
//             return value;
//         },
//         set(newval){
//             if(newval!==value){
//                 observer(newval)//深度监听，设置新值也监听，可能设置为对象
//                 value=newval;
//                 updateView();
//             }
//         }
//     })
// }

// function observer(target){
//     if(typeof target!=='object'||target===null){
//         return target;//不是数组或对象
//     }
//     for(let key in target){//重新定义各个属性
//         defineReactive(target,key,target[key])
//     }
// }

// function updateView(){//触发试图更新
//     console.log('视图更新一次~')
// }
// const data={
//     name:'mimi',
//     info:{
//         age:20//深度监听
//     }
// }
// observer(data)//监听数据
// data.name='nihao'//测试
// data.info.age=90;//改变深层对象

let obj = { name: 'mimi', age: 17 }
console.log(Array.from(obj));