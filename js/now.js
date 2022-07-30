var lengthOfLongestSubstring = function(s) {
    let left=0,right=left+1;
    let arr=s.slice(left,right);
    let res=right-left;
    while(right<s.length){
    if(arr.indexOf(s[right])==-1){
        right++;
    }else{
        left=right;
        right=left+1;
        res=Math.max(res,right-left);
    }
    return res;
    
    }}
    