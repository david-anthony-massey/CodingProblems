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

var maxPathSum = function(root) {
    var maxPath = root.val;


    var recursiveCheckLR = function(root, currentPartialPath) {
        if (root.right === null && root.left === null) {
            return maxPath;
        } else if(root.left === null) {
            return recursiveCheckR(root.right, currentPartialPath);
        } else if(root.right === null) {
            return recursiveCheckL(root.left, currentPartialPath);
        } else {
            let leftPath = recursiveCheckL(root.left, currentPartialPath);
            let rightPath = recursiveCheckR(root.right, currentPartialPath);
            
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

    var recursiveCheckL = function(root, currentPartialPath) {
        if (root.right === null && root.left === null) {
            if(currentPartialPath + root.val < root.val) {
                if(maxPath < root.val) {
                    maxPath = root.val;
                } 
                return root.val;
            }
         currentPartialPath = Math.max(currentPartialPath + root.val, root.val);   
            
        if(maxPath < currentPartialPath) {
            maxPath = currentPartialPath;
        }   
            
         return currentPartialPath;
     } else if(root.left === null) {
         return recursiveCheckR(root.right, currentPartialPath);
     } else if(root.right === null) {
         return recursiveCheckL(root.left, currentPartialPath);
     } else {
        let leftPath = recursiveCheckL(root.left, currentPartialPath);
        let rightPath = recursiveCheckR(root.right, currentPartialPath);
        
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
    
    var recursiveCheckR = function(root, currentPartialPath) {
        if (root.right === null && root.left === null) {
            if(currentPartialPath + root.val < root.val) {
                if(maxPath < root.val) {
                    maxPath = root.val;
                } 
                return root.val;
            }
         currentPartialPath = Math.max(currentPartialPath + root.val, root.val);   
            
        if(maxPath < currentPartialPath) {
            maxPath = currentPartialPath;
        }   
            
         return currentPartialPath;
     } else if(root.left === null) {
         return recursiveCheckR(root.right, currentPartialPath);
     } else if(root.right === null) {
         return recursiveCheckL(root.left, currentPartialPath);
     } else {

        let leftPath = recursiveCheckL(root.left, currentPartialPath);
            let rightPath = recursiveCheckR(root.right, currentPartialPath);
            
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
  
  return recursiveCheckLR(root, root.val);
  
  
  
  
  
};

var tree = function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var testTree = new tree(-10, new tree(9), new tree(20, new tree(15), new tree(7)));

console.log(maxPathSum(testTree));