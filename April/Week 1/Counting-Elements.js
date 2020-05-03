// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.

 

// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// Example 2:

// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

var countElements = function(arr) {
    let map = {}
    let ans = 0
    for(let i = 0; i < arr.length; i++) {
      !map[arr[i]] ? map[arr[i]] = 1 : map[arr[i]]++
    }
    for(let char in map) {
      const key = ((Number(char) + 1).toString())
      if(key in map) {
        ans += map[char]
      }
    }
    return ans
  };