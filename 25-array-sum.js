// Sum up the numbers of an array.
function sum(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
console.log(sum([2, 4, 1, 7])) // Expected output: 14
