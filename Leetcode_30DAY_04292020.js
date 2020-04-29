// Leetcode 30DAY 04/29/2020

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var recursiveCheckL = function(root, currentPartialPath, maxPath) {
    if (root.right === null && root.left === null) {
     currentPartialPath = Math.max(currentPartialPath + root.val, root.val);   
        
    if(maxPath < currentPartialPath) {
        maxPath = currentPartialPath;
    }   
        
     return currentPartialPath;
 } else if(root.left === null) {
     return recursiveCheckR(root.right, currentPartialPath, maxPath);
 } else if(root.right === null) {
     return recursiveCheckL(root.left, currentPartialPath, maxPath);
 } else {
     return Math.max(recursiveCheckL(root.left, currentPartialPath, maxPath), recursiveCheckR(root.right, currentPartialPath, maxPath));
 }
          
}

var recursiveCheckR = function(root, currentPartialPath, maxPath) {
   if (root.right === null && root.left === null) {
     currentPartialPath = Math.max(currentPartialPath + root.val, root.val);   
        
    if(maxPath < currentPartialPath) {
        maxPath = currentPartialPath;
    }   
        
     return currentPartialPath;
 } else if(root.left === null) {
     return recursiveCheckR(root.right, currentPartialPath, maxPath);
 } else if(root.right === null) {
     return recursiveCheckL(root.left, currentPartialPath, maxPath);
 } else {
     return Math.max(recursiveCheckL(root.left, currentPartialPath, maxPath), recursiveCheckR(root.right, currentPartialPath, maxPath));
 }

}

   
var recursiveCheckLR = function(root, currentPartialPath, maxPath) {
 if (root.right === null && root.left === null) {
     return maxPath;
 } else if(root.left === null) {
     return recursiveCheckR(root.right, currentPartialPath, maxPath);
 } else if(root.right === null) {
     return recursiveCheckL(root.left, currentPartialPath, maxPath);
 } else {
     let leftPath = recursiveCheckL(root.left, currentPartialPath, maxPath);
     let rightPath = recursiveCheckR(root.right, currentPartialPath, maxPath);
     
     if (leftPath < leftPath + rightPath && rightPath < leftPath + rightPath)
         if (maxPath < leftPath + rightPath) {
             maxPath = leftPath + rightPath;
             return maxPath;
         } else {
             if (Math.max(leftPath,rightPath) > maxPath){
                 return Math.max(leftPath,rightPath);
             }
             
             return maxPath;
         }
 }     
}

var maxPathSum = function(root) {
  
  var maxPath = root.val;
  
  return recursiveCheckLR(root, root.val, maxPath);
  
  
  
  
  
};