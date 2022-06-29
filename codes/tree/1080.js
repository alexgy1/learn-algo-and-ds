const sufficientSubset = (root, limit) => {
    return isNeedDelete(root, limit , 0) === false 
};



// public TreeNode sufficientSubset(TreeNode root, int limit) {
//     return helper(root,limit,0)==false ? null:root;

// }
// public boolean helper(TreeNode root,int limit,int csum){
//     if(root==null)return false;
//     if(root.left==null && root.right==null){
//         if(csum+root.val<limit){
//             return false;
//         }
//         return true;
//     }
//   boolean leftAns =  helper(root.left,limit,csum+root.val);
//  boolean rightAns= helper(root.right,limit,csum+root.val);
//     if(leftAns==false && rightAns==false){
//         return false;
//     }
//     if(leftAns==false){
//         root.left=null;
//     }
//     if(rightAns==false){
//         root.right=null;
//     }
//     return true;
// }
