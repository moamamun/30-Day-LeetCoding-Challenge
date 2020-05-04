// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

 

// Example 1:

// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. 


var findComplement = function(num) {
    
    if(num === 0) return 1
    
    let todo = num
    let bit = 1
    
    while(todo != 0) {
        num = num ^ bit
        
        bit = bit << 1
        todo = todo >> 1
    }
    
    return num
};