// var letterCombinations = function (digits) {
//     let res = [];
//     let len = digits.length;
//     const arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  
//     if (len === 0) return res;
//     if (len === 1) return arr[digits].split('');
  
//     // 用来存储 路径
//     let path = [];
//     backtrack(digits, len, 0);
//     return res;
  
//     // 回溯函数
//     function backtrack(digits, l, i) {
//       // 1.终止条件
//       if (path.length === l) {
//         res.push(path.join(''));
//         return;
//       }
//       // 2.遍历
//       for (const v of arr[digits[i]]) {
//         // 3.标记
//         path.push(v);
//         // 4.递归
//         backtrack(digits, l, i + 1);
//         // 5.撤回标记
//         path.pop();
//       }
//     }
//   };


let mapTypeToName = new Map([
    [Map, 'map'],
    [Array, 'array'],
    [ArrayBuffer, 'arraybuffer'],
    [Set, 'set'],
    [Date, 'date'],
    [Function, 'function'],
    [Number, 'number'],
    [String, 'string'],
    [Boolean, 'boolean']
  ]);
  
  function detectType(data) {
    if (typeof data !== 'object') {
      return typeof data;
    } else {
      if (data === null) return 'null';
      for (type of mapTypeToName) {
       if (data instanceof type) return mapTypeToName[type]
      }
      return 'object';
    }
  }