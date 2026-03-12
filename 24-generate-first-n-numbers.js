// Create an array that contains the first N odd numbers.
function firstNOddNumbers(n) {
    const oddNumbers = []
    for (let i = 0; i < n; i++) {
        oddNumbers.push(2 * i + 1)
    }
    return oddNumbers   
}
console.log(firstNOddNumbers(3)) // Expected output: [1, 3, 5]
console.log(firstNOddNumbers(6)) // Expected output: [1, 3, 5, 7, 9, 11]
