// Count how many apples (green and red) are in an array of fruits.
function countApples(arr) {
    // Renamed the parameter to 'fruit' for clarity
    const apples = arr.filter(fruit => fruit === '🍎' || fruit === '🍏');

    // Fixed the typo and removed the parentheses
    return apples.length; 
}

console.log(countApples(['🍎', '🍏', '🍌', '🥥'])) // Expected output: 2
