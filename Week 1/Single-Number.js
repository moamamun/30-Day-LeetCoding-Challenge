//Q: Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//Example: 
//Input: [2,2,1]
//Output: 1


function singleNumber(nums) {
  const map = {}
  let singleNumber;
  for(let i = 0; i < nums.length; i++) {
    if(!map[nums[i]]) {
      map[nums[i]] = 1
    } else {
      map[nums[i]] +=1
    }
  }
  for(let char in map) {
    if(map[char] == 1) {
      return char
    }
  }
}