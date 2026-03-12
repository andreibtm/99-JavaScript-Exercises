// Given two points objects, print out the area and the perimeter of the rectangle formed by the two points.
function printRectAreaAndPerimeter(pointA, pointB) {
    const width = Math.abs(pointA.x - pointB.x)
    const height = Math.abs(pointA.y - pointB.y)
    const area = width * height
    const perimeter = 2 * (width + height)
    console.log(`Area is ${area}`)
    console.log(`Perimeter is ${perimeter}`)
}
const A = { x: 0, y: 0 }
const B = { x : 2, y: 3 }
printRectAreaAndPerimeter(A, B)
/* Expected output:
Area is 6
Perimeter is 10
*/
