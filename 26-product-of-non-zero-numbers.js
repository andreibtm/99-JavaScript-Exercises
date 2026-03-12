// Compute the product of the numbers of an array without zeros.
function product(arr) {
    let total = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            total *= arr[i]
        }
    }
    return total
}
console.log(product([2, 3, 0])) // Expected output: 6
