// Boolean and Operators  
// 1.  Use comparison operators to compare two numbers and store the results 
// in boolean variables.  
// 2.  Declare two variables x and y with the values 8 and 12 respectively.  
// a. Use comparison operators to check and print the following:  
// b. If x is greater than y.  
// c. If x is less than or equal to y.  
// d. If x is equal to y.  
// e. If x is not equal to y.  
// 3. Declare the variables a and b with values true and false,  determine and print 
// the result of the following logical  operations:  
// a. a AND b 
// b. a OR b  
// c. NOT a  
// 4.  Declare variable p and assign it a value of 10. Use the  following 
// assignment operators to modify the value of p with any number and print 
// the result each time:  
// a. +=  
// b.  -=  
// c. *=  
// d. /=  
// e. %= 


let x = 8;
let y = 12;


console.log("x =", x);
console.log("y =", y);

let isXGreaterThanY = x > y;
console.log("Is x greater than y?", isXGreaterThanY);

let isXLessOrEqualToY = x <= y;
console.log("Is x less than or equal to y?", isXLessOrEqualToY);

let isXEqualToY = x === y;
console.log("Is x equal to y?", isXEqualToY);

let isXNotEqualToY = x !== y;
console.log("Is x not equal to y?", isXNotEqualToY);

console.log("\nSummary:");
console.log("x is greater than y:", isXGreaterThanY);
console.log("x is less than or equal to y:", isXLessOrEqualToY);
console.log("x is equal to y:", isXEqualToY);
console.log("x is not equal to y:", isXNotEqualToY);

let a = true;
let b = false;

let andResult = a && b; 
console.log("a AND b:", andResult); 

let orResult = a || b; 
console.log("a OR b:", orResult); 

let notAResult = !a; 
console.log("NOT a:", notAResult); 

let p = 10;
console.log("Initial value of p:", p);

p += 15; 
console.log("After p += 5:", p); 

p -= 23; 
console.log("After p -= 3:", p); 

p *= 52; 
console.log("After p *= 2:", p); 

p /= 64; 
console.log("After p /= 4:", p);

p %= 25; 
console.log("After p %= 5:", p); 