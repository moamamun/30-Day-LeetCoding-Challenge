var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        let i = 1;
        let j = n;
        
        let result = n;
        while(i <= j) {
            
            let middle = Math.floor((j+i)/2);
            
            if(isBadVersion(middle)) {
                
                result = middle;
                j = middle - 1;
                
            } else {
                
                i = middle + 1;
                
            }
        }
        return result;
    };
};