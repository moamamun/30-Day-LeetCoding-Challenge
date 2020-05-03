// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range [1, 100].


var checkValidString = function(s) {
    if(s.charAt(0) === ')') return false 
      const stack = []
      const star = []
      for(let i = 0; i < s.length; i++) {
        let char = s.charAt(i)
        if(char === '(') stack.push(i)
        else if(char === '*') star.push(i)
        else {
          if(stack.length) stack.pop()
          else if(star.length) star.pop()
          else return false 
        }
        
      }
      let j = stack.length - 1
      for(let i = star.length - 1; i >= 0; i--) {
        if(star[i] > stack[j]) {
          stack.pop()
          star.pop()
          j--
        } 
      }
      if(stack.length === 0) return true
        else return false 
  };