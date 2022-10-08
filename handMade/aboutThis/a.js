// function a() {
//     var temp = 10;
//     b();
// }
// function b() {
//     console.log(temp); // 报错 Uncaught ReferenceError: temp is not defined
// }
// a();



// function a() {
//     var temp = 10;
//     (function b() {
//         console.log(temp)
//     })()
// }
// a();


// var obj = {
//     say: function () {
//         console.log('say',this)
//       var f1 = () =>  {
//         console.log("1111", this);
//       }
//       f1();
//     },
//     pro: {
//       getPro:() =>  {
//          console.log(this);
//       }
//     }
// }
// obj.say();

// var age=90;
// var my={
//     age:19,
//     say:()=>{
//         console.log(this.age)
//     }
// }
// my.say();

// This is a JavaScript Quiz from BFE.dev

// console.log(1)
// const promise = new Promise((resolve) => {
//   console.log(2)
//   resolve(2)
//   console.log(3)
// })

// console.log(4)

// promise.then(() => {
//   console.log(5)
// }).then(() => {
//   console.log(6)
// })
// function removeChars(input) {
  
//   var n = input.replaceAll('b', '');
 
//   while (n.indexOf('ac') != -1) {
//     n = n.replace('ac', '');
//   }
//   return n;
// }
// function removeChars(input) {
//   input = input.replaceAll('b', "");
//   while(input.includes('ac')){
//     input = input.replaceAll("ac", "")
//   }
//   return input;
// }
// removeChars('ab') // 'a'
// removeChars('abc') // ''
// removeChars('cabbaabcca') // 'caa'


// class TaskCenter{
//   constructor() {
//     this.quene = [];
//     this.count = 0;
//   }
//   add() {
//     this.quene.push(`task${++this.count}`)
//   }
//   wait(delay){
//     this.quene.push(delay)
//   }
//   bofore() {
//     this.quene.unshift(`task${++this.count}`)
//   }
//   start() {
//     this.quene.forEach(item=>{
//       if (typeof item === 'number') {
//         setTimeout(null,item)
//       } else {
//         console.log(item)
//       }
//     })
//   }
// }
// let task=new TaskCenter()
// task().add().wait().start();


// window.number = 4;
// var obj = {
//     number: 3,
//     db1: (function () {
//         console.log(this);
//         this.number *= 4;
//         return function () {
//             console.log(this);
//             this.number *= 5;
//         }
//     })()
// }
// var db1 = obj.db1;
// db1();

console.log('2')