// Write a code using if else statements to check if a  number is 
// divisible by 2, 3, or both:  
// a. • If the number is divisible both by 2 and 3, print  
// i. 
// "Divisible by both."  
// b. • If the number is divisible by only 2, print"Divisible by 2."  
// c. • If the number is divisible by only 3, print"Divisible by 3." 
// d. • If the number is not divisible by either, print "Not divisible by 2 or 
// 3."


function checkDivisibility(number) {
    
    let isDivisibleBy2 = (number % 2 === 0);
    
    let isDivisibleBy3 = (number % 3 === 0);

    if (isDivisibleBy2 && isDivisibleBy3) {
        console.log("Divisible by both.");
    } else if (isDivisibleBy2) {
        console.log("Divisible by 2.");
    } else if (isDivisibleBy3) {
        console.log("Divisible by 3.");
    } else {
        console.log("Not divisible by 2 or 3.");
    }
}


let userInput = prompt("Please enter a number:");
let number = Number(userInput);
if (!isNaN(number)) {
    checkDivisibility(number);
} else {
    console.log("That's not a valid number. Please enter a numeric value.");
}


