var findComplement = function(num) {
    let todo = num, bit = 1;
    
    while(todo !== 0) {
        num = num ^ bit;
        console.log(num)
        bit = bit << 1;
        todo = todo >> 1;
    }
    return num;
};