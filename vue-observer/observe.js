//重新定义数组原型
const oldArrayProperty=Array.prototype;
//创建新对象，原型指向oldArrayProperty,再扩展新的方法不会影响原型 
const arrProto=Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift'].forEach(methodname => {
    arrProto[methodname] = function () {
        //console.log(1)
        updateView();
        oldArrayProperty[methodname].call(this, ...arguments);
    }
});

//重新定义属性，监听起来
function defineReactive(target,key,value){
    //深度监听
    observer(value)
    Object.defineProperty(target,key,{
        get(){
            return value
        },
        set(newval){
            if(newval!==value){
                observer(newval)//设置新值也监听，可能设置为对象
                value=newval;
                updateView();
            }
        }
    })
}

function observer(target){
    if(typeof target!=='object'||target===null){
        return target;//不是数组或对象
    }

   if( Array.isArray(target)){
    target.__proto__=arrProto;
   }
   for(let key in target){
    defineReactive(target,key,target[key])
   }
}

function updateView(){//触发试图更新
    console.log('视图更新一次~')
}
const data=[1,2,3]


observer(data)//监听数据
data.push(5)
console.log(data)