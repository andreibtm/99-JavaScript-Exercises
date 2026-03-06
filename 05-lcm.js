// Compute the least common multiple of 2 numbers.
function gcd(a, b) {
    while (b !== 0) {
        const temp = b
        b = a % b
        a = temp
    }
    return a
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}
console.log(lcm(6, 8)) // Expected output: 24
console.log(lcm(7, 3)) // Expected output: 21
