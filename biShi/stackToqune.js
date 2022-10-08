

class Queue {
    constructor(){
      this.stack=new Stack;
      this.stack1=new Stack;
    }
    enqueue(element) { 
      this.stack.push(element)
    }
    peek() { 
    while(this.stack.size()>0){
      this.stack1.push(this.stack.pop());
    }
    let top=this.stack1.peek();
    while(this.stack1.size>0){
      this.stack.push(this.stack1.pop());
    }
    return top;
    }
    size() { 
      // return count of element
      return this.stack.size();
    }
    dequeue() {
      // remove the head element
        while(this.stack.size()>0){
      this.stack1.push(this.stack.pop());
    }
    let top=this.stack1.pop();
    while(this.stack1.size>0){
      this.stack.push(this.stack1.pop());
    }
    return top;
    }
  }
  
  
  
  
  