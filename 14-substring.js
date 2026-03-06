// Given a dialog line, print it without the person’s name.
function printLineWithoutPerson(dialogLine) {
    // Find the position (index) of the first colon
    const colonIndex = dialogLine.indexOf(':');
    
    // If a colon exists in the string
    if (colonIndex !== -1) {
        // Grab everything after the colon, and use trim() to remove the leading space
        console.log(dialogLine.substring(colonIndex + 1).trim())
    }
}
printLineWithoutPerson('Jericho: Wow! It\'s amazing!')
// Expected output: Wow! It's amazing!
