// Given a name and an age, create a person object and add the field isOfLegalAge.
function getPerson(name, age) {
    return { name: name, age: age, isOfLegalAge: age >= 18 }    
}
console.log(getPerson('Iris', 18).isOfLegalAge) // Expected output: true
console.log(getPerson('Kara', 16).isOfLegalAge) // Expected output: false
