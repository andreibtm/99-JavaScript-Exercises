// Bring even numbers in front of an array.
function evenFirst(arr) {
    const evenNumbers = []
    const oddNumbers = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i])
        } else {
            oddNumbers.push(arr[i])
        }
    }
    return evenNumbers.concat(oddNumbers)   
}
console.log(evenFirst([1, 3, 3, 7, 4, 2, 0]))
// Expected output: [4, 2, 0, 1, 3, 3, 7]
