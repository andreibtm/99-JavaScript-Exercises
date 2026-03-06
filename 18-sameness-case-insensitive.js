// Check if two strings are the same, case-insensitive.
function isSame(str1, str2) {
    return(str1.toLowerCase() === str2.toLowerCase())
}
console.log(isSame('FaRmer', 'Farmer')) // Expected output: true
console.log(isSame('keyboard', 'mouse')) // Expected output: false
