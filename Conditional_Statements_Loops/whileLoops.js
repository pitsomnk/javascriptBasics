// Do While loops  
// 1. Print numbers from 1 to 10.  
// 2. Calculate the sum of all numbers from 1 to 100 and print the result.  
// 3. Prompt the user to enter a number greater than 10. Keep asking until 
// they enter a valid number. 
// 4. Create a simple guessing game where the user must  guess a number 
// between 1 and 10. The game continues until the user guesses the correct 
// number. 


console.log("Numbers from 1 to 10:");
let i = 1; 
while (i <= 10) {
    console.log(i);
    i++; 
}

console.log("Even numbers between 1 and 20:");
let j = 1; 
while (j <= 20) {
    if (j % 2 === 0) { 
        console.log(j);
    }
    j++; 
}

let sum = 0; 
let k = 1; 
while (k <= 100) {
    sum += k; 
    k++; 
}
console.log("Sum of all numbers from 1 to 100:", sum);

console.log("Multiples of 5 less than 50:");
let m = 1; 
while (m < 50) {
    if (m % 5 === 0) { 
        console.log(m);
    }
    m++; 
}