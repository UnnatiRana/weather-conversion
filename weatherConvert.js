// Let’s convert Kelvin to Celsius, then to Fahrenheit.

const kelvin = 293; 

const celsius = kelvin - 273;

let fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`${kelvin} Kelvin is about ${fahrenheit} degrees Fahrenheit.`);


// Let’s convert Celsius to Newton

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`${celsius} Kelvin is about ${newton} degrees Fahrenheit.`);



