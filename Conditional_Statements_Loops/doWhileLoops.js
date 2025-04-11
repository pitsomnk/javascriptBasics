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
do {
    console.log(i);
    i++; 
} while (i <= 10);


let sum = 0; 
let k = 1; 
do {
    sum += k; 
    k++; 
} while (k <= 100);
console.log("Sum of all numbers from 1 to 100:", sum);

const targetNumber = Math.floor(Math.random() * 10) + 1; 
let guess;
do {
    guess = prompt("Guess a number between 1 and 10:");
    guess = Number(guess); 
    if (guess < targetNumber) {
        console.log("Too low! Try again.");
    } else if (guess > targetNumber) {
        console.log("Too high! Try again.");
    }
} while (guess !== targetNumber); 
console.log("Congratulations! You guessed the correct number:", targetNumber);