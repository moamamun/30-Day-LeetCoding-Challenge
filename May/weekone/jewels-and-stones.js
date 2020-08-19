var numJewelsInStones = function(J, S) {
    
    const set = new Set();
    let counter = 0;
    
    for(let char of J) {
        if(!set.has(char)) {
            set.add(char)
        }
    }
    
    for(let char of S) {
        if(set.has(char)) counter++;
    }
    
    return counter;
};