var isValidSequence = function(root, arr) {
    
    



    var searchForPath = function (root, arr) {
        if (root.val !== arr[0])
            return false;

        for(var i=1;i<arr.length-1;i++) {
            if (arr[i] === root.left.val) {
                if(searchForPath(root.left, arr.slice(i) ))
                    return true; 
            } 
            if (arr[i] === root.right.val) {
                if(searchForPath(root.left.val, ))
                    return true;  
            } 

            return false;
        
        }
        return true
    }
    
    return searchForPath(root, arr);
    
    
};



var tree = function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var testTree = new tree(0, 
    new tree(1, 
        new tree(0, null, new tree(1)), new tree(1, new tree (0), new tree(0))), new tree(0, null, new tree(0)))


        console.log(isValidSequence(testTree, 
    
            [0,1,0,1]
            
            ));
        