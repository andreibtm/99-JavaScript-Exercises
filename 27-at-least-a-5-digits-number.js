// Check if the array contains at least a number of at least five digits.
function containsAtLeastFiveLongDigitsNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 10000) {
            return true
        }
    }
    return false    
}
console.log(containsAtLeastFiveLongDigitsNumber([1, 214])) // Expected output: false
console.log(containsAtLeastFiveLongDigitsNumber([21433])) // Expected output: true
