// Given a number, remove all even digits, if no odd digits remain, return -1.
function removeEvenDigits(n) {
    let result = 0;
    let placeValue = 1; // Tracks ones, tens, hundreds, etc.
    let foundOdd = false;

    // Use Math.abs to handle negative numbers safely
    n = Math.abs(n); 

    while (n > 0) {
        let digit = n % 10;
        
        // If the digit is odd
        if (digit % 2 !== 0) {
            // Place the digit in the correct position
            result = result + (digit * placeValue);
            placeValue *= 10;
            foundOdd = true;
        }
        
        // Remove the last digit, forcing an integer result
        n = Math.floor(n / 10);
    }

    return foundOdd ? result : -1;
}

console.log(removeEvenDigits(103234768)) // Expected output: 1337
console.log(removeEvenDigits(420)) // Expected output: -1 
