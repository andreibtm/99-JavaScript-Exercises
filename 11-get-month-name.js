// Given a month, return the month’s name.
function fromMonthNumberToString(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    // Check if the number is valid (between 1 and 12)
    if (monthNumber < 1 || monthNumber > 12) {
        return "Invalid month number";
    }

    // Subtract 1 to match the 0-based array index
    return months[monthNumber - 1];
}

console.log(fromMonthNumberToString(1)) // Expected output: January
console.log(fromMonthNumberToString(10)) // Expected output: October