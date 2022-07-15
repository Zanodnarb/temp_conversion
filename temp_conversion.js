const kelvin = 293 // kelvin will stay constant at 293
const celsius = kelvin - 273 // celsius = kelvin tempt - 273
let fahrenheit = celsius * (9/5) + 32
let newton = celsius * (33/100)
newton = Math.floor(newton)
fahrenheit = Math.floor(fahrenheit); // returns the largest integer <= 8
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`); 
console.log(`The temperature is ${newton} degrees Newton`)
