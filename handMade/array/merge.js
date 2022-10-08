function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    let source = arguments[i] || {};
    
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
        if (target[prop] && target[prop] instanceof Array) {
         target[prop]= Array.from(target[prop]).push(source[prop])
        }
      }
    }
  }
 
  return target;
};

console.log(merge({a:1},{b:2},{c:10},{a:0}))

