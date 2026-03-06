// Check if a string is a valid possible name. A valid name contains only letters and spaces and needs to contain at least 3 letters.
function isValidName(name) {
    // Rule 1: Check if the string contains ONLY letters (A-Z, a-z) and spaces (\s)
    // The ^ and $ ensure we are checking the string from the very start to the very end
    const hasOnlyLettersAndSpaces = /^[a-zA-Z\s]+$/.test(name);
    
    // Rule 2: Remove all spaces to count how many actual letters exist
    const letterCount = name.replace(/\s/g, '').length;
    
    // The name is valid only if both rules are true
    return hasOnlyLettersAndSpaces && (letterCount >= 3);
}

console.log(isValidName('Vl')) // Expected output: false
console.log(isValidName('Rebeque')) // Expected output: true
console.log(isValidName('Carol the 3rd')) // Expected output: false
