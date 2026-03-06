// Check if a string is palindrome (its’ reverse is equal to the string itself).
function isPalindrome(str) {
    // split('') turns the string into an array of individual characters
    // reverse() flips the array backwards
    // join('') stitches the array back into a single string
    const reversedStr = str.split('').reverse().join('');
    
    // Check if the original string matches the reversed one
    return str === reversedStr;
}

console.log(isPalindrome('radar')) // Expected output: true
console.log(isPalindrome('craftsman')) // Expected outpute: false
