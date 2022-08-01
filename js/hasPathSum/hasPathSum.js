function hasPathSum(root,target){
    if(!root)return false;

    let res=false;//定义结果的布尔值，当value==target才真
    const dfs=function(root,val){
        if(!root.left &&!root.right && val===targetSum){
            res= true;
        }
        if(root.left){dfs(root.left,val+root.left.val)}
        if(root.right ){dfs(root.right,val+root.right.val)}
       
    }
    dfs(root,root.val)
    return res;
}