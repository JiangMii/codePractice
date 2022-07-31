// class SingleObject {
//     login() {
//         console.log('login...')
//     }
// }
// SingleObject.getInstance = (function () {
//     let instance
//     return function () {
//         if (!instance) {
//             instance = new SingleObject();
//         }
//         return instance
//     }
// })()

// // 测试
// let obj1 = SingleObject.getInstance()
// obj1.login()
// let obj2 = SingleObject.getInstance()
// obj2.login()
// console.log(obj1 === obj2)
// class Animal{
//     static getKind(name){
//         switch(name){
//             case 'dog':
//                 return new Dog();
//             case 'cat':
//                 return new Cat();
//             default:
//                 throw new Error('没有这个动物');
//         }
//     }
// };
// class Cat{
//     constructor(){
//         this.name='mimi'
//     }
//     say(){
//         console.log('小猫'+this.name)
//     }
// }
// class Dog{
//     constructor(){
//         this.name='wangwang'
//     }
//     say(){
//         console.log('小狗'+this.name)
//     }
// }
// const a=Animal.getKind('dog')
// a.say();
// 定义主题，即观察者观察的对象(目标)
class Subject {
    constructor (name) {
      this.name = name
      this.observers = [] // 用来存储观察者
      this.state = '雨天'
    }
    // 添加观察者
    attach (observer) {
      this.observers.push(observer)
    }
  
    // 一旦被观察的信息发生变化，则通知观察者
    setState (newState) {
      this.state = newState
      this.observers.forEach(observer => {
        observer.update(newState)
      })
    }
  }
  // 定义观察者
  class Observer {
    constructor (name) {
      this.name = name
    }
    // 定义观察者针对数据发生变化做出的响应
    update (newState) {
      console.log(this.name + '知道了' + newState)
    }
  }
  
  const subject = new Subject('我是天气')
  const observerOne = new Observer('我是播报员1')
  const observerTwo = new Observer('我是播报员2')
  subject.attach(observerOne)
  subject.attach(observerTwo)
  subject.setState('晴天')
  