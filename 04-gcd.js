// Compute the greatest common divisor of 2 numbers.
function gcd(a, b) {
    while (b !== 0) {
        const temp = b
        b = a % b
        a = temp
    }
    return a
}
console.log(gcd(2, 8)) // Expected output: 2
console.log(gcd(6, 8)) // Expected output: 2
