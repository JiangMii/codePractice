Function.prototype.before = function (fn) {  
    let that = this;  
    return function () { // => 当前返回的函数就是newFn    
        fn.apply(this); // {0:123,1:456}    
        that.apply(this,arguments);  
    }
  }
  Function.prototype.after =function(fn) {
    let self = this;
    return function () {
      const res = self.apply(this, arguments);
  
      fn.apply(this, arguments);
      return res;
    }
  }
  
  var fun = function () { 
    console.log(2)
  }
  fun.after(function () {
    console.log(3)
  })() 