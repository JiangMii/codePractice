var isValid = function(s) {
    if(s.length%2!=0)return false
    let arr=s.split('');
    let now=[];
    for(let i=0;i<arr.length;i++){
      if(arr[i]=='('){
          now.push(')')
      }else if(arr[i]=='['){
          now.push(']')
      }else if(arr[i]=='{'){
          now.push('}')
      }else{
          if(now.pop()!==arr[i]){
            return false;
          }
      }
      console.log(now,arr)
    }
    if(now.length==s.length)return false
    return true;
    };
//    console.log( isValid('()[{}]'))
//    console.log( isValid('[]'))
   console.log( isValid('['))