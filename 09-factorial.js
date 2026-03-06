// Compute the factorial of a number.
function factorial(n) {
    let fact = 1
    for(let i = 1; i <= n; i++){
        fact *= i
    }

    return fact
}
console.log(factorial(3)) // Expected output: 6
console.log(factorial(5)) // Expected output: 120
