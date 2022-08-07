var MyStack = function() {
    this.quene=[];
    };
    
    /** 
     * @param {number} x
     * @return {void}
     */
    MyStack.prototype.push = function(x) {
    this.quene.push(x);
    return this.quene;
    };
    
    /**
     * @return {number}
     */
    MyStack.prototype.pop = function() {
    if(this.quene.length!==0){
        let now=this.quene[this.quene.length-1]
        this.quene.pop();
        return now;
    }else{
        return undefined;
    }
    };
    
    /**
     * @return {number}
     */
    MyStack.prototype.top = function() {
    return this.quene[this.quene.length-1]
    };
    
    /**
     * @return {boolean}
     */
    MyStack.prototype.empty = function() {
    if(this.quene.length===0){
        return true;
    }else{
        return false
    }
    };
    
    /**
     * Your MyStack object will be instantiated and called as such:
     * var obj = new MyStack()
     * obj.push(x)
     * var param_2 = obj.pop()
     * var param_3 = obj.top()
     * var param_4 = obj.empty()
     */