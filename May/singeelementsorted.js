var singleNonDuplicate = function(nums) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++) {
        const element = nums[i]
        if(!(map.has(element))) map.set(element, 1)
        else map.delete(element)
    }
    for(let [key, value] of map) 
    return key
  };