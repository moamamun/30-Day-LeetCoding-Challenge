var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    
    for(let char of magazine) {
        if(map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    
    for(let char of ransomNote) {
        if(map.has(char) && map.get(char) !== 0) {
            map.set(char, map.get(char) - 1);
        } else {
            return false;
        }
    }
    return true;
};