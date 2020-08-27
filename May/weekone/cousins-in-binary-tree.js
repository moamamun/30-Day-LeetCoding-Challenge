var isCousins = function(root, x, y) {
    
    const xInfo = getInfo(root, x, null, 0);
    const yInfo = getInfo(root, y, null, 0);
    
    if(xInfo.parent !== yInfo.parent && xInfo.depth === yInfo.depth) return true;
    return false;
};

const getInfo = (root, x , parent, depth) => {
    
    const obj = {
        "parent": parent,
        "depth": depth
    };
    
    if(!root) return;
    if(root.val === x) return obj;
    
    else {
        parent = root.val;
        let left =  getInfo(root.left, x, parent, depth+1);
        if(left) return left;
        let right = getInfo(root.right, x, parent, depth+1);
        if(right) return right;
    }
    
}