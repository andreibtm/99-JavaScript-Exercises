// Check if an array contains a given value exactly twice.
function containsTwice(arr, x) {
    let count = 0   
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            count++
        }
    }
    return count === 2
}
console.log(containsTwice([1, 2, 2], 2)) // Expected output: true
console.log(containsTwice([4, 1, 0, 9], 0)) // Expected output: false
console.log(containsTwice([3, 3, 3, 3], 3)) // Expected output: false
