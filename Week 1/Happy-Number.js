//Q: Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//Example: 
//Input: [2,2,1]
//Output: 1


function isHappy(n) {
  let arr = n.toString()
  let counter = 0
  while(arr !== "1" && counter < 101) {
    counter++
    let output = 0
    for(let char of arr) {
      output = char ** 2 + output
    }
    arr = output.toString()
    console.log(arr)
  }if(counter > 100) {
    return false
  }
  return true
};