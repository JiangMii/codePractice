function moveZeros(list) {
    for(let i=list.length-1;i>=0;i--){
      if(list[i]===0){
        list.splice(i,1);
        list.push(0);
      }
    }
    return list
}
function moveZeros2(list) {//从前遍历  发现删不掉第一个  索引的问题 
    for(let i=0;i<list.length;i++){
      if(list[i]===0){
        list.splice(i,1);
        list.push(0);
      }
    }
    return list
}
console.log(moveZeros([0, 0, 0, 1, 3, 2, 6]))
console.log(moveZeros2([0, 0, 0, 1, 3, 2, 6]))