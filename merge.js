/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort(function(a,b){return a[0]-b[0]})
    
    for(let i=0;i<intervals.length-1;i++){
        let pre=intervals[i]
        let late=intervals[i+1]
        if(pre[1]>=late[0]){
            intervals.splice(i,2,[pre[0],Math.max(pre[1],late[1])])
            i--
        }
    }
    return intervals
    };
   console.log( merge([[1,3],[2,6],[8,10],[15,18]]))

