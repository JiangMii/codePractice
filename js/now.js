var compareVersion = function(version1, version2) {
    let v1=version1.indexOf('.')==-1?[version1]:version1.split('.');
    let v2=version2.indexOf('.')==-1?[version2]:version2.split('.');
   // console.log(v1,v2)
    let l=Math.max(v1.length,v2.length);
    console.log(l)
    let findZore=function(s){
        let left=0;
        while(left<s.length){
           if(s[left]!==0){
               return Number(s.slice(left));
           }else{
               left++;
           }
        }
       
    }
    for(let i=0;i<l;i++){
        v1[i]=v1[i]?v1[i]:0, v2[i]=v2[i]?v2[i]:0;
        let a=findZore(v1[i])?findZore(v1[i]):0;
        let b=findZore(v2[i])?findZore(v2[i]):0;
        console.log(a,b)
    if(a>b){
        console.log('s')
        return 1;
    }else if(a<b){
        console.log('b')
        return -1;
    }
    
    };
    console.log('xt')
    return 0
    };
compareVersion("1.0.1", "1");

