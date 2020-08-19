var firstUniqChar = function(s) {
    
    const map = new Map();
    
    for(let i = 0; i < s.length; i++) {
        let ele = s[i];
        if(map.has(ele)) map.set(ele, "copy")
        else map.set(ele, i)
    }
    
    for(let char of s) {
        if(map.get(char) !== "copy") return map.get(char)
    }
    
    return -1
};