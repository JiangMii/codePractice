// function isHui(str) {
//     let left = 0, right = str.length - 1;
//     let flag = true;
//     while (right - left > 1) {
//         if (str[right] != str[left]) {
//             flag = false;
//         }
//         right--;
//         left++;
//     }
//     if (right - left == 1) {
//         if (str[right] != str[left]) {
//             flag = false;
//         }
//     }
//     return flag;
// }
// console.log(isHui('abbaa'),
// isHui('abcba'),
// isHui('bbaa'),
// isHui('abcddcba'))


// var MinStack = function() {
//     this.stack=[];
//     this.stack2=[];
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//     this.stack.push(val);
//     if(val > (this.stack2[this.stack2.length-1] ?? Infinity)){
//         this.stack2.push(this.stack2[this.stack2.length-1])
//     }else{
//         this.stack2.push(val);
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     const pop=this.stack.pop();
//     this.stack2.pop();
//     return pop;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length-1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.stack2[this.stack2.length-1];

// };


// const test = new MinStack();

// test.push(2)
// test.push(0)

// test.push(3)
// test.push(0)

// test.getMin()
// test.pop()
// console.log(test)

// test.getMin()
// test.pop()

// // console.log(test)


// try {
//   var flag = true;
// } catch { }

// var state = false;
// function fun() {
//   if (typeof flag === 'undefined') {
//     console.log(1)
//   };
//   if (typeof state === 'undefined') {
//     var state = 20;
//     console.log(1);
//   }
// }
// fun()

