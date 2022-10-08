// window.myLocalStorage = {
//     getItem(key) {
//       // your code here
//       let now=Date.now();
//       let obj=JSON.parse(window.localStorage.getItem(key))
//       if(now-obj.time>obj.expire){
//         myLocalStorage.removeItem(key)
//         return null
//       }
//         return obj.data;
//     },
//     setItem(key, value, maxAge) {
//       let obj={
//         data:value,expire:maxAge,time:Date.now()
//       }
//       window.localStorage.setItem(key,JSON.stringify(obj));
//       // your code here
  
//     },
    
//     removeItem(key) {
//       // your code here
//       window.localStorage.removeItem(key);
//     },
    
//     clear() {
//       // your code here
   
//        window.localStorage.clear();
      
//     }
//   }

window.myLocalStorage = {
  
    getItem(key) {
     return  window.localStorage.getItem(key);
    },
    setItem(key, value, maxAge) {
      window.localStorage.setItem(key,value)
  
    if(maxAge===0){
      window.localStorage.removeItem(key);
    }else if(maxAge>0){
      setTimeout(()=>{
        window.localStorage.removeItem(key)
      },maxAge)
    }
  
    },
    
    removeItem(key) {
      // your code here
      window.localStorage.removeItem(key);
    },
    
    clear() {
      // your code here
   
       window.localStorage.clear();
      
    }
  }