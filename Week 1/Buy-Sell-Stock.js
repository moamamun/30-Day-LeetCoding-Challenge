
// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Q: Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
//Example
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

let maxProfit = (A, profit = 0) => {
    let N = A.length;
    for (let i = 0, j = 0; i < N; i = j + 1) {
        while (i < N - 1 && A[i] > A[i + 1]) ++i; 
        j = i;
        while (j < N - 1 && A[j] < A[j + 1]) ++j; 
        profit += Math.max(0, A[j] - A[i]);
    }
    return profit;
};