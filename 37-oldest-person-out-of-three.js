// Print out the name of the oldest person out of 3.
function printOldestPersonsName(pers1, pers2, pers3) {
    let oldestPerson = pers1
    if (pers2.age > oldestPerson.age) {
        oldestPerson = pers2
    }
    if (pers3.age > oldestPerson.age) {
        oldestPerson = pers3
    }
    console.log(oldestPerson.name)   
}
printOldestPersonsName(
    { name: 'Joanna', age: 57 },
    { name: 'Erika', age: 34 },
    { name: 'Cornel', age: 38 }
) // Expected output: Joanna
