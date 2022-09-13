let a = 1;
let b = 10;
let c = 2;

let x1 = (-b + (Math.sqrt(Math.pow(b,2)-4*a*c)))/(2*a);
let x2 = (-b - (Math.sqrt(Math.pow(b,2)-4*a*c)))/(2*a);
console.log(`Using the quadratic formula with a = 1, b = 10, and c = 2 we get (${x1}, ${x2})`);
