function objectAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new Error('Not an object')  
  }
target=Object(target);
for(const source of sources){
if(source===null || source==undefined){continue}
for(let item in source){
  if(source.hasOwnProperty(item)){
    target[item]=source[item];
  }
}
for( const key of Object.getOwnPropertySymbols(source)){
target[key]=source[key]
}
}
return target;
}
let a=Symbol('2')
let dd=Symbol('6')
let obj4 = { name: a };
let res = objectAssign({ a: 4 }, { b: 0 },{a:9}, obj4)
console.log(res)
// const s1 = Symbol()
// const s2 = Symbol('ccc')
// const s3 = Symbol('aaa')

// const obj = {
//   [s1]:'abc',
//   [s2]:'cba'
// }
// let res = Object.getOwnPropertySymbols(obj);
// console.log(res)