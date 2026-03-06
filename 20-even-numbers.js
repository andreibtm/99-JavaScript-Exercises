// Print all even numbers from an array.
function printEvenNumbers(arr) {
    // Filter keeps only the numbers where the remainder divided by 2 is 0
    const evens = arr.filter(num => num % 2 === 0);
    
    // Join stitches the array elements together with a space in between
    console.log(evens.join(' '));
}

printEvenNumbers([1, 2, 3, 4, 5]) // Expected output: 2 4
