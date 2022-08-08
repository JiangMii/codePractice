//用栈实现队列，队列需要满足push，POP删除第一个元素并返回，peek返回第一个元素，判断是否空四个功能；
//可以利用辅助栈，只能使用push，POP从尾部弹出并返回该元素；
var MyQueue = function() {
    this.quene1=[];
    this.quene2=[];
    };
    
    /** 
     * @param {number} x
     * @return {void}
     */
    MyQueue.prototype.push = function(x) {
      this.quene1[this.quene1.length]=x;
      return this.quene1.length;
    };
    
    /**
     * @return {number}
     */
    MyQueue.prototype.pop = function() {
        let l1=this.quene1.length;
    for(let i=0;i<l1;i++){
        this.quene2.push(this.quene1.pop());
    }
    let now=this.quene2.pop();
    for(let j=0;j<l1-1;j++){
        this.quene1.push(this.quene2.pop());
    }
    return now;
    };
    
    /**
     * @return {number}
     */
    MyQueue.prototype.peek = function() {
    return this.quene1[0];
    };
    
    /**
     * @return {boolean}
     */
    MyQueue.prototype.empty = function() {
    return this.quene1.length===0?true:false;
    };
