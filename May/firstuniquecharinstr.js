// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.




var firstUniqChar = function(s) {
    let map = {}
    for(let i = 0; i < s.length; i++) {
        let element = s.charAt(i)
        if(!(element in map)) {
            map[element] = 1
        }
        else map[element] += 1 
    }
    for(let i = 0; i < s.length; i++) {
        if(map[s.charAt(i)] === 1) return i
    }
    return -1 

};