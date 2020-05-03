// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]


var groupAnagrams = function(strs) {
    let map = {}
    for(let str of strs) {
        sorted = str.split('').sort().join('')
        !map[sorted] ? map[sorted] = [str] : map[sorted].push(str)
    }
    return Object.values(map)
};