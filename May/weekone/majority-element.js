var majorityElement = function(nums) {
    
    const map = new Map();
    
    for(let num of nums) {
        if(map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    }
    
    console.log(map)
    
    let current = nums[0];
    
    for(let [key, value] of map) {
        if(value > map.get(current)) current = key;

    }
    
    return current;
};